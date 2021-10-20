// MM 621 Project 2 Code
// Developed + designed by Chelsea Cresencia

let img;
var bdew; // dewy button
var bcir; // circle button
var bcart; // add to cart button
var bview; // view cart button
var bcheck; // checkout button
var screenNum;

function preload()
{
  header = loadImage('https://i.imgur.com/SvBUibK.png');
  grad1 = loadImage('https://i.imgur.com/62NwVZk.png');
  cloudp = loadImage('https://images.ctfassets.net/p3w8f4svwgcg/3pkpOFantfCIBFBEZZmUKE/eba8dd3906d5e7502b902d652ebe559a/CloudPaint.jpg?w=1400&q=80&fm=webp');
  dewy = loadImage('https://cdn.shopify.com/s/files/1/0902/2442/files/em-cosmic-pearl-dewy-eyshadow-05-0330.jpg?v=1631210454');
  mini = loadImage('https://cdn.shopify.com/s/files/1/0314/1143/7703/products/Mini-Mauve-Lip-Duo-SKU.jpg?v=1626217046');
  fenty = loadImage('https://cdn.shopify.com/s/files/1/0341/3458/9485/products/FB31006_FB0420_650x.jpg?v=1620680777');
  estee = loadImage('https://www.esteelauder.com/media/export/cms/products/640x640/el_sku_YA6FCT_640x640_0.jpg');
  maybe = loadImage('https://i1.wp.com/www.thebeautyjournalsxo.com/wp-content/uploads/2018/04/20180307_125159.jpg?resize=1140%2C1140');
  grad2 = loadImage('https://i.imgur.com/0GSyjCG.png');
    grad3 = loadImage('https://i.imgur.com/ZgLWFbd.png');
  wish = loadImage('https://cdn.shopify.com/s/files/1/0902/2442/products/em-cosmic-pearl-dewy-eyeshadow-03-0308_2ba4e3af-f2fa-4b11-97a7-6d7ac6b4ada3.jpg?v=1633642851');
  bcir = loadImage('https://i.imgur.com/5khSPEc.png');
  underlay = loadImage('https://i.imgur.com/uYZvEZR.png');
  grad4 = loadImage('https://i.imgur.com/NqmXu3K.png');
  dawn = loadImage('https://images.ctfassets.net/p3w8f4svwgcg/3dcQnTPhRxjOd4bhbjagn4/f73b6c0522cc4c7dee624e1a7b0e4a07/CloudPaint_1-Dawn_1.jpg?w=1400&q=80&fm=webp');
  wish = loadImage('https://cdn.shopify.com/s/files/1/0902/2442/products/em-cosmic-pearl-dewy-eyeshadow-03-0308_2ba4e3af-f2fa-4b11-97a7-6d7ac6b4ada3.jpg?v=1633642851');
  rare2 = loadImage('https://cdn.shopify.com/s/files/1/0314/1143/7703/products/Foundation-190W-SKU.jpg?v=1598647957');
  home = loadImage('https://i.imgur.com/IydMwgy.png');

}

function setup() {
  createCanvas(428, 926);

  bdew = createImg('https://cdn.shopify.com/s/files/1/0902/2442/files/em-cosmic-pearl-dewy-eyshadow-05-0330.jpg?v=1631210454', 'dewy');
  bdew.position(210, 450);
  bdew.size(147,172);
  bdew.touchStarted(changeScreenToProduct);

  bcir = createImg('https://i.imgur.com/5khSPEc.png', 'circle');
  bcir.position(190, 664);
  bcir.size(92,80);
  bcir.touchStarted(changeScreenToSelect);
  bcir.hide();

  bcart = createImg('https://i.imgur.com/TNE1ZIi.png', 'cart button');
  bcart.position(83, 860);
  bcart.size(262,42);
  bcart.touchStarted(changeScreenToCart);
  bcart.hide();

  bview = createImg('https://i.imgur.com/tliJocT.png', 'view cart button');
  bview.position(90, 450);
  bview.size(251,52);
  bview.touchStarted(changeScreenToOrder);
  bview.hide();

  bcheck = createImg('https://i.imgur.com/Q6GX1wf.png', 'checkout button');
  bcheck.position(90, 800);
  bcheck.size(251,52);
  bcheck.touchStarted(changeScreenToConfirm);
  bcheck.hide();

  screenNum = 1;

  background(224);
}

function draw()
{
    if(screenNum == 1) // HOME screen
      {

  image(header,0,0,428,359);
  image(grad1, 0, 359, 428, 565);

  fill(255,255,255);
  textStyle(BOLD);
  textSize(60);
  textFont('Georgia');
  text('Hello,',40,150);

  fill(255,255,255);
  textStyle(BOLD);
  textSize(60);
  textFont('Georgia');
  text('beautiful.',40,220);

  noStroke();
  fill(216, 173,153);
  rect(40,240,348,56, 20);

  fill(255,255,255);
  textStyle(NORMAL);
  textSize(30);
  textFont('Helvetica');
  text('Search',55,280);

  fill(255,255,255);
  textStyle(BOLD);
  textSize(30);
  textFont('Georgia');
  text('Cult Products',40,420);

  image(cloudp,40,450,147,172); // product one

  fill(0,0,0);
  textStyle(NORMAL);
  textSize(15);
  textFont('Helvetica');
  text('CLOUD PAINT',40,650);

  fill(0,0,0);
  textStyle(ITALIC);
  textSize(15);
  textFont('Helvetica');
  text('Glossier',40,670);

  //image(dewy,210,450,147,172); // product two

  fill(0,0,0);
  textStyle(NORMAL);
  textSize(15);
  textFont('Helvetica');
  text('COSMIC PEARL',210,650);

  fill(0,0,0);
  textStyle(NORMAL);
  textSize(15);
  textFont('Helvetica');
  text('DEWY EYESHADOWS',210,670);

  fill(0,0,0);
  textStyle(ITALIC);
  textSize(15);
  textFont('Helvetica');
  text('Em Cosmetics',210,690);

  image(mini,380,450,147,172); // product three

  fill(0,0,0);
  textStyle(NORMAL);
  textSize(15);
  textFont('Helvetica');
  text('MINI MAUVE',380,650);

  fill(0,0,0);
  textStyle(ITALIC);
  textSize(15);
  textFont('Helvetica');
  text('Rare Beauty',380,670);

  fill(255,255,255);
  textStyle(BOLD);
  textSize(30);
  textFont('Georgia');
  text('Foundations',40,730);

  image(fenty,40,760,147,172);
  image(estee,210,760,147,172);
  image(maybe,380,760,147,172);
  }

  else if( screenNum == 2) // PRODUCT SCREEN
    {

      bdew.hide();


      image(dewy,0,0,428,503);
  image(grad2, 0, 478, 428, 448);

  noStroke();
  fill(216, 173,153); // muted pink
  ellipse(179, 456, 15, 15);

  noStroke();
  fill(255,255,255);
  ellipse(207, 456, 15, 15);

  noStroke();
  fill(255,255,255);
  ellipse(234, 456, 15, 15);

  fill(255,255,255);
  textStyle(BOLD);
  textSize(30);
  textFont('Georgia');
  text('COSMIC PEARL',40,530);

  fill(255,255,255);
  textStyle(BOLD);
  textSize(30);
  textFont('Georgia');
  text('DEWY EYESHADOWS',40,570);

  fill(255,255,255);
  textStyle(ITALIC);
  textSize(20);
  textFont('Helvetica');
  text('BY EM COSMETICS',40,605);

  fill(0,0,0);
  textStyle(NORMAL);
  textSize(20);
  textFont('Helvetica');
  text('Shade Selection',40,650);

  stroke(255);
  fill(190, 154,137);
  ellipse(75, 700, 60, 60);

  stroke(255);
  fill(213, 167,150);
  ellipse(155, 700, 60, 60);

  bcir.show();

  //stroke(255);
  //fill(174, 126,103);
  //bcir = createButton('');
  //bcir.position(235,700);
  //bcir.size(60,60);
  //ellipse(235, 700, 60, 60);
  //bcir.touchStarted(changeScreenToSelect);

  stroke(255);
  fill(217, 147,134);
  ellipse(315, 700, 60, 60);

  stroke(255);
  fill(191, 104,74);
  ellipse(395, 700, 60, 60);

  fill(0,0,0);
  textStyle(NORMAL);
  textSize(20);
  noStroke();
  textFont('Helvetica');
  text('Size Selection',40,770);

  noFill();
  stroke(217,147,134);
  strokeWeight(3);
  rect(40, 790, 109, 52);

  fill(0,0,0);
  textStyle(NORMAL);
  textSize(20);
  noStroke();
  textFont('Helvetica');
  text('.05 oz',70,825);

  noFill();
  stroke(217,147,134);
  strokeWeight(3);
  rect(160, 790, 109, 52);

  fill(0,0,0);
  textStyle(NORMAL);
  textSize(20);
  noStroke();
  textFont('Helvetica');
  text('.1 oz',190,825);

  noFill();
  stroke(217,147,134);
  strokeWeight(3);
  rect(280, 790, 109, 52);

  fill(0,0,0);
  textStyle(NORMAL);
  textSize(20);
  noStroke();
  textFont('Helvetica');
  text('.2 oz',310,825);

  noStroke();
  fill(217,147,134);
  rect(83, 860, 262, 42);

  fill(255,255,255);
  textStyle(NORMAL);
  textSize(20);
  noStroke();
  textFont('Helvetica');
  text('ADD TO CART',145,885);
    }
  else if (screenNum == 3) // SELECTION SCREEN
    {
      bcir.hide();

      background(224);

  image(wish,0,0,428,503);
  image(grad3, 0, 478, 428, 448);

  noStroke();
  fill(255,255,255); // muted pink
  ellipse(179, 456, 15, 15);

  noStroke();
  fill(255,255,255);
  ellipse(207, 456, 15, 15);

  noStroke();
  fill(216,173,153);
  ellipse(234, 456, 15, 15);

  fill(255,255,255);
  textStyle(BOLD);
  textSize(30);
  textFont('Georgia');
  text('COSMIC PEARL',40,530);

  fill(255,255,255);
  textStyle(BOLD);
  textSize(30);
  textFont('Georgia');
  text('DEWY EYESHADOWS',40,570);

  fill(255,255,255);
  textStyle(ITALIC);
  textSize(20);
  textFont('Helvetica');
  text('BY EM COSMETICS',40,605);

  fill(0,0,0);
  textStyle(NORMAL);
  textSize(20);
  textFont('Helvetica');
  text('Shade Selection',40,650);

  stroke(255);
  fill(190, 154,137);
  ellipse(75, 700, 60, 60);

  stroke(255);
  fill(213, 167,150);
  ellipse(155, 700, 60, 60);

  stroke(255);
  fill(174, 126,103);
  ellipse(235, 700, 60, 60);

  fill(255,255,255);
  textStyle(NORMAL);
  textSize(40);
  noStroke();
  textFont('Helvetica');
  text('✓', 220,715);

  stroke(255);
  fill(217, 147,134);
  ellipse(315, 700, 60, 60);

  stroke(255);
  fill(191, 104,74);
  ellipse(395, 700, 60, 60);

  fill(0,0,0);
  textStyle(NORMAL);
  textSize(20);
  noStroke();
  textFont('Helvetica');
  text('Size Selection',40,770);

  noFill();
  stroke(217,147,134);
  strokeWeight(3);
  rect(40, 790, 109, 52);

  fill(0,0,0);
  textStyle(NORMAL);
  textSize(20);
  noStroke();
  textFont('Helvetica');
  text('.05 oz',70,825);

  noFill();
  stroke(217,147,134);
  strokeWeight(3);
  rect(160, 790, 109, 52);

  fill(0,0,0);
  textStyle(NORMAL);
  textSize(20);
  noStroke();
  textFont('Helvetica');
  text('.1 oz',190,825);

  fill(255,255,255);
  //stroke(217,147,134);
  strokeWeight(3);
  rect(280, 790, 109, 52);

  fill(217,147,134);
  textStyle(BOLD);
  textSize(20);
  noStroke();
  textFont('Helvetica');
  text('.2 oz',310,825);

  bcart.show();

  //noStroke();
  //fill(217,147,134);
  //rect(83, 860, 262, 42);

  //fill(255,255,255);
  //textStyle(NORMAL);
  //textSize(20);
  //noStroke();
  //textFont('Helvetica');
  //text('ADD TO CART',145,885);
    }

  else if(screenNum == 4)
    {
      background(224);

  image(underlay,0,0,428,926);

  noStroke();
  fill(229,200,184);
  rect(44, 359, 341, 220,30);

  noStroke();
  fill(216,173,153);
  ellipse(214, 340, 85, 85);

  fill(255,255,255);
  textStyle(BOLD);
  textSize(70);
  textFont('Georgia');
  text('♥',195,360);

  fill(255,255,255);
  textStyle(BOLD);
  textSize(28);
  textFont('Georgia');
  text('Item Added to Cart',80,427);

  //noStroke();
  //fill(217,147,134);
  //rect(90, 450, 251, 52);

  //fill(255,255,255);
  //textStyle(NORMAL);
  //textSize(20);
  //noStroke();
  //textFont('Helvetica');
  //text('VIEW CART',160,480);

  bview.show();

  noStroke();
  fill(174,126,103);
  rect(90, 510, 251, 52);

  fill(255,255,255);
  textStyle(NORMAL);
  textSize(20);
  noStroke();
  textFont('Helvetica');
  text('CONTINUE SHOPPING',110,540);
    }
  else if (screenNum == 5)
    {
      background(224);

  image(grad4,0,0,428,926);

  fill(255,255,255);
  textStyle(BOLD);
  textSize(25);
  textFont('Georgia');
  text('SHOPPING CART',100,50);

  noStroke();
  fill(229,200,184);
  image(dawn,40, 102, 97, 120,);

  fill(0,0,0); // ITEM ONE
  textStyle(BOLD);
  textSize(15);
  textFont('Helvetica');
  text('CLOUD PAINT',150,130);

  fill(0,0,0);
  textStyle(ITALIC);
  textSize(15);
  textFont('Helvetica');
  text('GLOSSIER',150,150);

  fill(0,0,0);
  textStyle(NORMAL);
  textSize(15);
  textFont('Helvetica');
  text('Shade: Dawn, .33 fl oz',150,170);

  fill(0,0,0);
  textStyle(NORMAL);
  textSize(15);
  textFont('Helvetica');
  text('$18',150,190);

  noStroke(); // ITEM TWO
  fill(229,200,184);
  image(rare2,40, 260, 97, 120,);

  fill(0,0,0);
  textStyle(BOLD);
  textSize(15);
  textFont('Helvetica');
  text('LIQUID TOUCH',150,280);

  fill(0,0,0);
  textStyle(BOLD);
  textSize(15);
  textFont('Helvetica');
  text('WEIGHTLESS FOUNDATION',150,300);

  fill(0,0,0);
  textStyle(ITALIC);
  textSize(15);
  textFont('Helvetica');
  text('RARE BEAUTY',150,320);

  fill(0,0,0);
  textStyle(NORMAL);
  textSize(15);
  textFont('Helvetica');
  text('Shade: 190W, 1 fl oz',150,340);

  fill(0,0,0);
  textStyle(NORMAL);
  textSize(15);
  textFont('Helvetica');
  text('$29',150,360);

  noStroke(); // ITEM THREE
  fill(229,200,184);
  image(wish,40, 418, 97, 120,);

  fill(0,0,0);
  textStyle(BOLD);
  textSize(15);
  textFont('Helvetica');
  text('COSMIC PEARL',150,440);

  fill(0,0,0);
  textStyle(BOLD);
  textSize(15);
  textFont('Helvetica');
  text('DEWY EYESHADOWS',150,460);

  fill(0,0,0);
  textStyle(ITALIC);
  textSize(15);
  textFont('Helvetica');
  text('EM COSMETICS',150,480);

  fill(0,0,0);
  textStyle(NORMAL);
  textSize(15);
  textFont('Helvetica');
  text('Shade: Wish, .2 fl oz',150,500);

  fill(0,0,0);
  textStyle(NORMAL);
  textSize(15);
  textFont('Helvetica');
  text('$52',150,520);

  fill(255,255,255);
  textStyle(NORMAL);
  textSize(30);
  textFont('Georgia');
  text('Sub Total:',40,750);

  fill(255,255,255);
  textStyle(NORMAL);
  textSize(30);
  textFont('Georgia');
  text('$99',320,750);

  bcheck.show();

  //noStroke();
  //fill(217,147,134);
  //rect(90, 800, 251, 52);

  //fill(255,255,255);
  //textStyle(NORMAL);
  //textSize(20);
  //noStroke();
  //textFont('Helvetica');
  //text('CHECKOUT',160,830);

  fill(255,255,255);
  stroke(174,126,103);
  rect(90, 860, 251, 52);

  fill(174,126,103);
  textStyle(NORMAL);
  textSize(20);
  noStroke();
  textFont('Helvetica');
  text('CONTINUE SHOPPING',110,895);
    }
  else if(screenNum == 6)
    {
      background(224);

  image(home,0,0,428,926);

  noStroke();
  fill(229,200,184);
  rect(44, 359, 341, 250,30);

  noStroke();
  fill(216,173,153);
  ellipse(214, 340, 85, 85);

  fill(255,255,255);
  textStyle(BOLD);
  textSize(70);
  textFont('Georgia');
  text('♥',195,360);

  fill(255,255,255);
  textStyle(BOLD);
  textSize(28);
  textFont('Georgia');
  text('Thank You',130,427);

  fill(255,255,255);
  textStyle(NORMAL);
  textSize(16);
  textFont('Helvetica');
  text('Your purchase saved 5 lbs of plastic!',80,455);

  noStroke();
  fill(217,147,134);
  rect(90, 470, 251, 52);

  fill(255,255,255);
  textStyle(NORMAL);
  textSize(20);
  noStroke();
  textFont('Helvetica');
  text('VIEW DETAILS',150,505);

  noStroke();
  fill(174,126,103);
  rect(90, 530, 251, 52);

  fill(255,255,255);
  textStyle(NORMAL);
  textSize(20);
  noStroke();
  textFont('Helvetica');
  text('CONTINUE SHOPPING',110,565);
    }

    }

function changeScreenToProduct()
{
  screenNum = 2;
  bdew.hide();
}

function changeScreenToSelect()
{
  bcir.hide();
  screenNum = 3;
}

function changeScreenToCart()
{
  bcart.hide();
  screenNum = 4;
}

function changeScreenToOrder()
{
  bview.hide();
  screenNum = 5;
}

function changeScreenToConfirm()
{
  bcheck.hide();
  screenNum = 6;
}
