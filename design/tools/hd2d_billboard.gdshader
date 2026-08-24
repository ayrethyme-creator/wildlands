shader_type spatial;

// HD-2D creature billboard.
//
// A sprite standing in a 3D world has three problems a plain quad does not solve:
//
//  1. It must face the camera, but must NOT tip backwards when the camera looks
//     down at it - so the billboard is locked to the Y axis, not free.
//  2. A flat card lit flatly reads as cardboard. The normal is bent across the
//     sprite so light wraps around it as though it had volume.
//  3. Alpha-blended quads do not write depth, which breaks sorting and kills
//     depth of field - the one effect the photographer career actually needs.
//     depth_prepass_alpha fixes that.

render_mode cull_disabled, depth_prepass_alpha, diffuse_burley, specular_disabled;

uniform sampler2D albedo : source_color, filter_linear_mipmap;
uniform vec4 tint : source_color = vec4(1.0);
uniform float alpha_cut : hint_range(0.0, 1.0) = 0.35;

// 0.0 = flat card. ~0.6 reads as a rounded animal. 1.0 over-bends and the
// edges go dark.
uniform float roundness : hint_range(0.0, 1.0) = 0.6;

// Lifts the sprite slightly toward the camera so it does not z-fight with the
// ground plane it is standing on.
uniform float ground_bias = 0.01;

void vertex() {
    // Y-locked billboard. Take the camera's right vector, flatten it onto the
    // horizontal plane, and rebuild the basis from that - so the sprite spins
    // to face the camera but always stays upright.
    vec3 cam_right = INV_VIEW_MATRIX[0].xyz;
    vec3 up        = vec3(0.0, 1.0, 0.0);
    vec3 right     = normalize(vec3(cam_right.x, 0.0, cam_right.z));
    vec3 fwd       = normalize(cross(right, up));

    // Keep whatever scale the node was given - species differ enormously in
    // size and that scale is set per-animal, not here.
    float sx = length(MODEL_MATRIX[0].xyz);
    float sy = length(MODEL_MATRIX[1].xyz);

    mat4 billboard = mat4(
        vec4(right * sx, 0.0),
        vec4(up    * sy, 0.0),
        vec4(fwd,        0.0),
        MODEL_MATRIX[3] + vec4(fwd * ground_bias, 0.0)
    );
    MODELVIEW_MATRIX = VIEW_MATRIX * billboard;
}

void fragment() {
    vec4 t = texture(albedo, UV);
    ALBEDO = t.rgb * tint.rgb;
    ALPHA  = t.a * tint.a;
    ALPHA_SCISSOR_THRESHOLD = alpha_cut;

    // Bend the normal outward across the sprite. NORMAL is view-space here and
    // the quad faces the camera, so +Z is straight at the viewer: pushing X
    // outward at the edges makes a rim light behave like it is curving around
    // a body instead of sliding off a flat plane.
    float bend = (UV.x - 0.5) * 2.0;
    vec3  curved = normalize(vec3(bend, 0.0, 1.0));
    NORMAL = normalize(mix(vec3(0.0, 0.0, 1.0), curved, roundness));
}
