document.querySelector("#start_button").addEventListener("click", toggleWave);
document.querySelector("#stop_button").addEventListener("click", toggleWave);
document.querySelector("#shop_button").addEventListener("click", open_shop);
document.querySelector("#close_button").addEventListener("click", open_shop);
document.querySelector("#settings_button").addEventListener("click", toggle_settings);
document.querySelector("#close_sett_button").addEventListener("click", toggle_settings);
document.querySelector("#begin_button").addEventListener("click", BeginGame);
document.querySelector("#muteFX").addEventListener("click", muteFX);
document.querySelector("#muteBG").addEventListener("click", muteBG);
document.querySelector("#sprite1").addEventListener("click", pAttack);
document.querySelector("#sprite2").addEventListener("click", pAttack);
document.querySelector("#sprite3").addEventListener("click", pAttack);
document.querySelector("#sprite4").addEventListener("click", pAttack);
document.querySelector("#spriteRandoBox").addEventListener("click", pAttack);


let points = 0, reward = 10;
let i=0, j, aux;
let cpH = 100, pH = 100, mH = 100;
let shop_op = 0;
let m1HP, m2HP, m3HP, m4HP;
let pDamage = 20, mDamage = Math.floor(mH/10);
let stop = 1;
let settings_op = 0;
let toggleFX=0, toggleBG=0;

//Random perks

var Srandom = 3 + Math.floor(Math.random() * 4);
var Drandom = Math.floor(Math.random() *6);
var go;

//Selectors

var m1 = document.querySelector("#monster_1");
var m2 = document.querySelector("#monster_2");
var m3 = document.querySelector("#monster_3");
var m4 = document.querySelector("#monster_4");

var pAttackS = document.querySelector("#attack_effect");
var ShopSound = document.querySelector("#shop_effect");
var mLeftSound = document.querySelector("#mleft_effect");
var bgMusic = document.querySelector("#background_music");

var spriteselect1 = document.querySelector("#sprite1");
var spriteselect2 = document.querySelector("#sprite2");
var spriteselect3 = document.querySelector("#sprite3");
var spriteselect4 = document.querySelector("#sprite4");
var randoBoxSelect = document.querySelector("#RandoBox");
var randoBoxSprite = document.querySelector("#spriteRandoBox");
var player = document.querySelector("#player");
var pointsText = document.querySelector("#points");
let beginButton = document.querySelector("#begin_button");

let sliderInput = document.querySelector("#sliderInput");
let FX_button = document.querySelector("#muteFX");
let BG_button = document.querySelector("#muteBG");

function toggleWave() {
    if(stop == 0) {
        stop=1;
        document.querySelector("#stop_button").style.display = "none";
        document.querySelector("#start_button").style.display = "block";
    }
    else {
        stop=0;
        attack();
    }
}

function attack() {
    if(i<=0 && !shop_op) {
        if(settings_op) {
            settings_op = 0;
            document.querySelector("#settings").style.display = "none";
            document.querySelector("#close_sett_button").style.display = "none";
            document.querySelector("#settings_button").style.display = "block";
        }
        document.querySelector("#stop_button").style.display = "block";
        document.querySelector("#start_button").style.display = "none";
        Reset();
        m1HP = m2HP = m3HP = m4HP = mH;
        while(i<=0){
        i = 1 + Math.floor(Math.random() * 4);
        aux = i;
        
        go = Math.floor(Math.random() * 10);
        if(!go)
            randoBoxSprite.classList.add("throw");
        
        go = Math.floor(Math.random() * 2);
        if(go) {
            aux--;
            Srandom = 3 + Math.floor(Math.random() * 4);
            Drandom = Math.floor(Math.random() *6);
            m1.classList.add("anim_" + Srandom);
            m1.classList.add("animdel_" + Drandom);
            m1.classList.add("attack");
            document.querySelector("#m1HP").innerHTML = m1HP;
            setColor_m1HP();
        }
        
        if(aux>0){
            go = Math.floor(Math.random() * 2);
            if(go) {
                aux--;
                Srandom = 3 + Math.floor(Math.random() * 4);
                Drandom = Math.floor(Math.random() *6);
                m2.classList.add("anim_" + Srandom);
                m2.classList.add("animdel_" + Drandom);
                m2.classList.add("attack");
                document.querySelector("#m2HP").innerHTML = m2HP;
                setColor_m2HP();
            }
        }
        
        if(aux>0){
            go = Math.floor(Math.random() * 2);
            if(go) {
                aux--;
                Srandom = 3 + Math.floor(Math.random() * 4);
                Drandom = Math.floor(Math.random() *6);
                m3.classList.add("anim_" + Srandom);
                m3.classList.add("animdel_" + Drandom);
                m3.classList.add("attack");
                document.querySelector("#m3HP").innerHTML = m3HP;
                setColor_m3HP();
            }
        }
        
        if(aux>0){
            go = Math.floor(Math.random() * 2);
            if(go) {
                aux--;
                Srandom = 3 + Math.floor(Math.random() * 4);
                Drandom = Math.floor(Math.random() *6);
                m4.classList.add("anim_" + Srandom);
                m4.classList.add("animdel_" + Drandom);
                m4.classList.add("attack");
                document.querySelector("#m4HP").innerHTML = m4HP;
                setColor_m4HP();
            }
        }
        
        i=i-aux;
        }
         
        j = Math.floor(Math.random() * 10);
        mH = mH + j;
        reward = Math.floor(mH/10);
        mDamage = Math.floor(mH/8);
    }
    else if(i==0 && shop_op) {
        document.getElementById("shopOpened").classList.remove("disappear");
        document.getElementById("shopOpened").offsetHeight;
        document.getElementById("shopOpened").classList.add("disappear");
        ShopSound.play();
    }
    else {
        document.getElementById("mLeft").classList.remove("disappear");
        document.getElementById("mLeft").offsetHeight;
        document.getElementById("mLeft").classList.add("disappear");
        mLeftSound.play();
    }
}

function open_shop() {
    if(settings_op) {
        settings_op = 0;
        document.querySelector("#settings").style.display = "none";
        document.querySelector("#close_sett_button").style.display = "none";
        document.querySelector("#settings_button").style.display = "block";
    }
    if(!shop_op && i==0 && stop==1){
        shop_op = 1;
        document.getElementById("shop").style.zIndex="1";
        document.querySelector("#shop_button").style.display = "none";
        document.querySelector("#close_button").style.display = "block";
    }
    else if (!shop_op && i!=0) {
        document.getElementById("mLeft").classList.remove("disappear");
        document.getElementById("mLeft").offsetHeight;
        document.getElementById("mLeft").classList.add("disappear");
        mLeftSound.play();
    }
    else {
        shop_op = 0;
        document.getElementById("shop").style.zIndex="-1";
        document.querySelector("#close_button").style.display = "none";
        document.querySelector("#shop_button").style.display = "block";
    }
}

function pAttack() {
    var random_attack = 1+Math.floor(Math.random() *3);
    pAttackS.src = ("Assets/Sounds/p_attack" + random_attack +".mp3");
    pAttackS.play();
    document.querySelector("#weapon").classList.remove("pAttack");
    document.querySelector("#weapon").offsetHeight;
    document.querySelector("#weapon").classList.add("pAttack");
    document.querySelector("#sprite1").removeEventListener("click", pAttack);
    document.querySelector("#sprite2").removeEventListener("click", pAttack);
    document.querySelector("#sprite3").removeEventListener("click", pAttack);
    document.querySelector("#sprite4").removeEventListener("click", pAttack);
    document.querySelector("#spriteRandoBox").removeEventListener("click", pAttack);
    setTimeout(reAttack, 400);
}

//attacking for each monster

spriteselect1.addEventListener("click", pA_m1);
m1.addEventListener("animationend", takeDMG);
spriteselect2.addEventListener("click", pA_m2);
m2.addEventListener("animationend", takeDMG);
spriteselect3.addEventListener("click", pA_m3);
m3.addEventListener("animationend", takeDMG);
spriteselect4.addEventListener("click", pA_m4);
m4.addEventListener("animationend", takeDMG);
randoBoxSprite.addEventListener("click", randomBox);
spriteselect1.addEventListener("animationend", monster1Reset);
spriteselect2.addEventListener("animationend", monster2Reset);
spriteselect3.addEventListener("animationend", monster3Reset);
spriteselect4.addEventListener("animationend", monster4Reset);


function randomBox() {
    var x = 1 + Math.floor(Math.random() * 2);
    if(x == 1) {
        points = points + reward;
        document.getElementById("points").innerHTML = points + " PTS";
        document.getElementById("points_gained").classList.remove("disappear");
        document.getElementById("points_gained").offsetHeight;
        document.getElementById("points_gained").classList.add("disappear");
    }
    else {
        cpH = pH;
        document.querySelector("#player_HP").innerHTML = cpH;
        setColor_playerHP();
        document.getElementById("hp_gained").classList.remove("disappear");
        document.getElementById("hp_gained").offsetHeight;
        document.getElementById("hp_gained").classList.add("disappear");
    }
    randoBoxSprite.classList.remove("throw");
    randoBoxSprite.offsetHeight;
}

function pA_m1() {
    m1HP = m1HP - pDamage;
    document.querySelector("#m1HP").innerHTML = m1HP;
    setColor_m1HP();
    if(m1HP <= 0) {
        m1.removeEventListener("animationend", takeDMG);
        m1.classList.add("paused");
        spriteselect1.removeEventListener("click", pAttack);
        spriteselect1.removeEventListener("click", pA_m1);
        spriteselect1.classList.add("die");
        document.querySelector("#m1HP").classList.add("die");
        i--;
        if(i==0 && stop==0){
            setTimeout(verifyAttack, 1500);
        }
        points = points + reward;
        document.getElementById("points").innerHTML = points + " PTS";
    }
}

function pA_m2() {
    m2HP = m2HP - pDamage;
    document.querySelector("#m2HP").innerHTML = m2HP;
    setColor_m2HP();
    if(m2HP <= 0) {
        m2.removeEventListener("animationend", takeDMG);
        m2.classList.add("paused");
        spriteselect2.removeEventListener("click", pAttack);
        spriteselect2.removeEventListener("click", pA_m2);
        spriteselect2.classList.add("die");
        document.querySelector("#m2HP").classList.add("die");
        i--;
        if(i==0 && stop==0){
            setTimeout(verifyAttack, 1500);
        }
        points = points + reward;
        document.getElementById("points").innerHTML = points + " PTS";
    }
}

function pA_m3() {
    m3HP = m3HP - pDamage;
    document.querySelector("#m3HP").innerHTML = m3HP;
    setColor_m3HP();
    if(m3HP <= 0) {
        m3.removeEventListener("animationend", takeDMG);
        m3.classList.add("paused");
        spriteselect3.removeEventListener("click", pAttack);
        spriteselect3.removeEventListener("click", pA_m3);
        spriteselect3.classList.add("die");
        document.querySelector("#m3HP").classList.add("die");
        i--;
        if(i==0 && stop==0){
            setTimeout(verifyAttack, 1500);
        }
        points = points + reward;
        document.getElementById("points").innerHTML = points + " PTS";
    }
}

function pA_m4() {
    m4HP = m4HP - pDamage;
    document.querySelector("#m4HP").innerHTML = m4HP;
    setColor_m4HP();
    if(m4HP <= 0) {
        m4.removeEventListener("animationend", takeDMG);
        m4.classList.add("paused");
        spriteselect4.removeEventListener("click", pAttack);
        spriteselect4.removeEventListener("click", pA_m4);
        spriteselect4.classList.add("die");
        document.querySelector("#m4HP").classList.add("die");
        i--;
        if(i==0 && stop==0){
            setTimeout(verifyAttack, 1500);
        }
        points = points + reward;
        document.getElementById("points").innerHTML = points + " PTS";
    }
}

function takeDMG() {
    cpH = cpH - mDamage - Math.floor(Math.random() * 3);
    document.querySelector("#player_HP").innerHTML = cpH;
    setColor_playerHP();
    i--;
    if(i==0 && stop==0)
            attack();
    if(cpH <= 0) {
        document.querySelector("#game_over_effect").play();
        Reset();
        i=0;
        document.querySelector("#game_over").style.zIndex = "999";
        document.querySelector("#start_button").removeEventListener("click", attack);
        document.querySelector("#shop_button").removeEventListener("click", open_shop);
        document.querySelector("#start_over_button").addEventListener("click", Restart);
    }
}


//Setting HP colors

function setColor_playerHP() {
    let x = (cpH*100)/pH;
    if(x==100)
        document.getElementById("player_HP").style.background = "#00ff00";
    else if(x>=75)
        document.getElementById("player_HP").style.background = "#bbff00";
    else if(x>=50)
        document.getElementById("player_HP").style.background = "#ffff00";
    else if(x>=25)
        document.getElementById("player_HP").style.background = "#ffbb00";
    else
        document.getElementById("player_HP").style.background = "#ff4400";
}

function setColor_m1HP() {
    let x = (m1HP*100)/mH;
    if(x==100)
        document.getElementById("m1HP").style.background = "#00ff00";
    else if(x>=75)
        document.getElementById("m1HP").style.background = "#bbff00";
    else if(x>=50)
        document.getElementById("m1HP").style.background = "#ffff00";
    else if(x>=25)
        document.getElementById("m1HP").style.background = "#ffbb00";
    else
        document.getElementById("m1HP").style.background = "#ff4400";
}

function setColor_m2HP() {
    let x = (m2HP*100)/mH;
    if(x==100)
        document.getElementById("m2HP").style.background = "#00ff00";
    else if(x>=75)
        document.getElementById("m2HP").style.background = "#bbff00";
    else if(x>=50)
        document.getElementById("m2HP").style.background = "#ffff00";
    else if(x>=25)
        document.getElementById("m2HP").style.background = "#ffbb00";
    else
        document.getElementById("m2HP").style.background = "#ff4400";
}

function setColor_m3HP() {
    let x = (m3HP*100)/mH;
    if(x==100)
        document.getElementById("m3HP").style.background = "#00ff00";
    else if(x>=75)
        document.getElementById("m3HP").style.background = "#bbff00";
    else if(x>=50)
        document.getElementById("m3HP").style.background = "#ffff00";
    else if(x>=25)
        document.getElementById("m3HP").style.background = "#ffbb00";
    else
        document.getElementById("m3HP").style.background = "#ff4400";
}

function setColor_m4HP() {
    let x = (m4HP*100)/mH;
    if(x==100)
        document.getElementById("m4HP").style.background = "#00ff00";
    else if(x>=75)
        document.getElementById("m4HP").style.background = "#bbff00";
    else if(x>=50)
        document.getElementById("m4HP").style.background = "#ffff00";
    else if(x>=25)
        document.getElementById("m4HP").style.background = "#ffbb00";
    else
        document.getElementById("m4HP").style.background = "#ff4400";
}

//shop

var buy_armor = document.querySelector("#armor_buy");
var buy_leg = document.querySelector("#leg_buy");
var buy_weapon = document.querySelector("#weapon_buy");

let armor_price = 200, leg_price = 200, weapon_price = 200;

buy_armor.addEventListener("click", Armor_buy);
buy_leg.addEventListener("click", Leg_buy);
buy_weapon.addEventListener("click", Weapon_buy);

function Armor_buy() {
    if(points >= armor_price){
        cpH = cpH + 20;
        pH = pH + 20;
        setColor_playerHP();
        document.querySelector("#player_HP").innerHTML = cpH;
        points = points - armor_price;
        document.getElementById("points").innerHTML = points + " PTS";
        armor_price = armor_price + Math.floor(armor_price/4);
        document.getElementById("armor_price").innerHTML = "PRICE: " + armor_price + " PTS";
    }
}

function Leg_buy() {
    if(points >= leg_price){
        cpH = cpH + 20;
        pH = pH + 20;
        setColor_playerHP();
        document.querySelector("#player_HP").innerHTML = cpH;
        points = points - leg_price;
        document.getElementById("points").innerHTML = points + " PTS";
        leg_price = leg_price + Math.floor(leg_price/4);
        document.getElementById("leg_price").innerHTML = "PRICE: " + leg_price + " PTS";
    }
}

function Weapon_buy() {
    if(points >= weapon_price){
        pDamage = pDamage + Math.floor(pDamage/5);
        points = points - weapon_price;
        document.getElementById("points").innerHTML = points + " PTS";
        weapon_price = weapon_price + Math.floor(weapon_price/2);
        document.getElementById("weapon_price").innerHTML = "PRICE: " + weapon_price + " PTS";
    }
}

//Settings

function toggle_settings() {
    if(shop_op){
        shop_op=0;
        document.getElementById("shop").style.zIndex="-1";
        document.querySelector("#close_button").style.display = "none";
        document.querySelector("#shop_button").style.display = "block";
    }
    if(!settings_op && i==0 && stop==1){
        settings_op = 1;
        document.querySelector("#settings").style.display = "block";
        document.querySelector("#settings_button").style.display = "none";
        document.querySelector("#close_sett_button").style.display = "block";
    }
    else if (!settings_op && i!=0) {
        document.getElementById("mLeft").classList.remove("disappear");
        document.getElementById("mLeft").offsetHeight;
        document.getElementById("mLeft").classList.add("disappear");
        mLeftSound.play();
    }
    else {
        settings_op = 0;
        document.querySelector("#settings").style.display = "none";
        document.querySelector("#close_sett_button").style.display = "none";
        document.querySelector("#settings_button").style.display = "block";
    }
}


//Reset

function Reset() {
    
    //monster 1
    monster1Reset();
    m1.addEventListener("animationend", takeDMG);
    
    //monster 2
    monster2Reset();
    m2.addEventListener("animationend", takeDMG);
    
    //monster 3
    monster3Reset();
    m3.addEventListener("animationend", takeDMG);
    
    //monster 4
    monster4Reset();
    m4.addEventListener("animationend", takeDMG);
    
    //randoBox
    randoBoxSprite.classList.remove("throw");
    randoBoxSprite.offsetHeight;
}

function monster1Reset() {
    m1.classList.remove("paused");
    spriteselect1.classList.remove("die");
    document.querySelector("#m1HP").classList.remove("die");
    spriteselect1.addEventListener("click", pAttack);
    spriteselect1.addEventListener("click", pA_m1);
    m1.classList.remove("anim_3");
    m1.classList.remove("anim_4");
    m1.classList.remove("anim_5");
    m1.classList.remove("anim_6");
    m1.classList.remove("animdel_1");
    m1.classList.remove("animdel_2");
    m1.classList.remove("animdel_3");
    m1.classList.remove("animdel_4");
    m1.classList.remove("animdel_5");
    m1.classList.remove("attack");
    m1.offsetHeight;
}

function monster2Reset() {
    m2.classList.remove("paused");
    spriteselect2.classList.remove("die");
    document.querySelector("#m2HP").classList.remove("die");
    spriteselect2.addEventListener("click", pAttack);
    spriteselect2.addEventListener("click", pA_m2);
    m2.classList.remove("anim_3");
    m2.classList.remove("anim_4");
    m2.classList.remove("anim_5");
    m2.classList.remove("anim_6");
    m2.classList.remove("animdel_1");
    m2.classList.remove("animdel_2");
    m2.classList.remove("animdel_3");
    m2.classList.remove("animdel_4");
    m2.classList.remove("animdel_5");
    m2.classList.remove("attack");
    m2.offsetHeight;
}

function monster3Reset() {
    m3.classList.remove("paused");
    spriteselect3.classList.remove("die");
    document.querySelector("#m3HP").classList.remove("die");
    spriteselect3.addEventListener("click", pAttack);
    spriteselect3.addEventListener("click", pA_m3);
    m3.classList.remove("anim_3");
    m3.classList.remove("anim_4");
    m3.classList.remove("anim_5");
    m3.classList.remove("anim_6");
    m3.classList.remove("animdel_1");
    m3.classList.remove("animdel_2");
    m3.classList.remove("animdel_3");
    m3.classList.remove("animdel_4");
    m3.classList.remove("animdel_5");
    m3.classList.remove("attack");
    m3.offsetHeight;
}

function monster4Reset() {
    m4.classList.remove("paused");
    spriteselect4.classList.remove("die");
    document.querySelector("#m4HP").classList.remove("die");
    spriteselect4.addEventListener("click", pAttack);
    spriteselect4.addEventListener("click", pA_m4);
    m4.classList.remove("anim_3");
    m4.classList.remove("anim_4");
    m4.classList.remove("anim_5");
    m4.classList.remove("anim_6");
    m4.classList.remove("animdel_1");
    m4.classList.remove("animdel_2");
    m4.classList.remove("animdel_3");
    m4.classList.remove("animdel_4");
    m4.classList.remove("animdel_5");
    m4.classList.remove("attack");
    m4.offsetHeight;
}

function Restart() {
    Reset();
    document.querySelector("#game_over").style.zIndex = -10;
    points = 0;
    pH = 100;
    cpH = 100;
    document.querySelector("#player_HP").innerHTML = cpH;
    setColor_playerHP();
    mH = 100;
    pDamage = 20;
    mDamage = Math.floor(mH/10);
    armor_price = 200;
    leg_price = 200;
    weapon_price = 200;
    reward=10;
    document.getElementById("points").innerHTML = points + " PTS";
    document.getElementById("weapon_price").innerHTML = "PRICE: " + weapon_price;
    document.getElementById("leg_price").innerHTML = "PRICE: " + leg_price;
    document.getElementById("armor_price").innerHTML = "PRICE: " + armor_price;
    document.querySelector("#start_button").addEventListener("click", attack);
    document.querySelector("#shop_button").addEventListener("click", open_shop);
}

// attack reset

function reAttack() {
    document.querySelector("#sprite1").addEventListener("click", pAttack);
    document.querySelector("#sprite2").addEventListener("click", pAttack);
    document.querySelector("#sprite3").addEventListener("click", pAttack);
    document.querySelector("#sprite4").addEventListener("click", pAttack);
    document.querySelector("#spriteRandoBox").addEventListener("click", pAttack);
}

// verification

function verifyAttack() {
    if(stop==0)
        attack();
}

// volume control

sliderInput.addEventListener("input", moveSlider);

function moveSlider() {
    pAttackS.volume = sliderInput.value/100;
    ShopSound.volume = sliderInput.value/100;
    mLeftSound.volume = sliderInput.value/100;
    bgMusic.volume = sliderInput.value/200;
}

function muteFX() {
    if(toggleFX) {
        pAttackS.muted = false;
        ShopSound.muted = false;
        mLeftSound.muted = false;
        toggleFX=0;
        FX_button.style.backgroundColor = "lawngreen";
        FX_button.style.color = "black";
    }
    else{
        pAttackS.muted = true;
        ShopSound.muted = true;
        mLeftSound.muted = true;
        toggleFX=1;
        FX_button.style.backgroundColor = "red";
        FX_button.style.color = "white";
    }
}

function muteBG() {
    if(toggleBG) {
        bgMusic.muted = false;
        toggleBG = 0;
        BG_button.style.backgroundColor = "lawngreen";
        BG_button.style.color = "black";
    }
    else {
        bgMusic.muted = true;
        toggleBG = 1;
        BG_button.style.backgroundColor = "red";
        BG_button.style.color = "white";
    }
}

// Begin Game

function BeginGame() {
    beginButton.style.display = "none";
    player.style.left="12vw";
    pointsText.style.opacity = "100%";
    document.querySelector("#start_button").style.display = "block";
    document.querySelector("#shop_button").style.display = "block";
    document.querySelector("#settings_button").style.display = "block";
    bgMusic.play();
    bgMusic.volume = 0.5;
}












