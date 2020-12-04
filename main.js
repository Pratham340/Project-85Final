canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

car1_width=120;
car1_height=70;
car1_image="car1.png";
car1_x=10;
car1_y=80;

car2_width=120;
car2_height=70;
car2_image="car2.png";
car2_x=10;
car2_y=450;

background_image="racing_t.jpg";

function add() {
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src="racing_t.jpg";

    car1_imgTag=new Image();
    car1_imgTag.onload=uploadCar1;
    car1_imgTag.src="car1.png";

    car2_imgTag=new Image();
    car2_imgTag.onload=uploadCar2;
    car2_imgTag.src="car2.png";
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadCar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {

    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38'){
        car1_up();
    }
    if(keyPressed=='40'){
        car1_down();
    }
    if(keyPressed=='37'){
        car1_left();
    }
    if(keyPressed=='39'){
        car1_right();
    }
        if(keyPressed=='87'){
            car2_up();
        }
        if(keyPressed=='83'){
            car2_down();
        }
        if(keyPressed=='65'){
            car2_left();
        }
        if(keyPressed=='68'){
            car2_right();
        }

        if(car1_x>700){
            winner="Car1 Wins";
            
        }
        else if(car2_x>700){
            winner="Car2 Wins";
        }
        console.log(winner);
            document.getElementById('game_status').innerHTML=winner;
    }

    function car1_up(){
        if(car1_y>=0){
            car1_y=car1_y-10;
            uploadBackground();
            uploadCar1();
            uploadCar2();
        }
    }

    function car1_down(){
        if(car1_y<=500){
            car1_y=car1_y+10;
            uploadBackground();
            uploadCar1();
            uploadCar2();
        }
    }

    function car1_left(){
        if(car1_x>=0){
            car1_x=car1_x-10;
            uploadBackground();
            uploadCar1();
            uploadCar2();
        }
    }

    function car1_right(){
        if(car1_x<=800){
            car1_x=car1_x+10;
            uploadBackground();
            uploadCar1();
            uploadCar2();
        }
    }

    function car2_up(){
        if(car2_y>=0){
            car2_y=car2_y-10;
            uploadBackground();
            uploadCar1();
            uploadCar2();
        
    }}

    function car2_down(){
        if(car2_y<=500){
            car2_y=car2_y+10;
            uploadBackground();
            uploadCar1();
            uploadCar2();
        }
    }

    function car2_left(){
        if(car2_x>=0){
            car2_x=car2_x-10;
            uploadBackground();
            uploadCar1();
            uploadCar2();
        }
    }

    function car2_right(){
        if(car2_x<=800){
        car2_x=car2_x+10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }}