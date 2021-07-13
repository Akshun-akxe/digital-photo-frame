function preload() {

}

function setup() {
    canvas = createCanvas(750, 750);
    canvas.position(300, 280);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    circle(380, 380, 700);
    fill("red");
    image(video, 200, 200, 400, 400);
    tint(tint_color);
}

function take_snapshot() {
    save('bruh.png');
}

function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}