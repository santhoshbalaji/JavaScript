var myimg = [
				'http://ll-c.ooyala.com/e1/ozbm52YjE6izjqtSRh9ilzTYAg8WWB_h/promo324073730',
				'http://ddydc3qiky-flywheel.netdna-ssl.com/wp-content/uploads/2016/08/harry-potter-60875721625.jpeg',
				'http://hdfreewallpaper.net/wp-content/uploads/2016/02/harry-potter-hd-free-wallpaper-free-download.jpg',
				'https://static.themovieclips.com/backdrops/full/0295297/harry-potter-and-the-chamber-of-secrets-6.jpg',
				'https://fanart.tv/fanart/movies/671/moviebackground/harry-potter-and-the-sorcerers-stone-515c26607f69e.jpg',
				'https://images.freecreatives.com/wp-content/uploads/2016/03/Harry-Potter-Wallpaper-For-Free.jpg',
				'http://images5.fanpop.com/image/photos/28500000/Gryffindors-gryffindor-28516044-1920-1080.jpg',
				'https://fanart.tv/fanart/movies/675/moviebackground/harry-potter-and-the-order-of-the-phoenix-50561501ead3d.jpg',
				'http://wallpapercave.com/wp/E4W2mZB.jpg',
				'https://images.susu.org/unionfilms/films/backgrounds/hd/harry-potter-6.jpg',
				'http://cdn.skim.gs/images/Harry-Potter-and-The-Deathly-Hallows-Part-2/new-insane-harry-potter-ending-revelation-discovered-video',
				'https://images4.alphacoders.com/130/thumb-1920-130496.jpg',
				'http://www.walldevil.com/wallpapers/w08/harry-potter-lord-voldemort-bellatrix-lestrange-death-eater-lucius-malfoy.jpg',
				'https://cache.ps.yelo.prd.telenet-ops.be/yposter/images/YeloImages/harry_potter_and_the_half-blood_prince_bg.jpg?recipe=website_hero_background',
				'http://www.lanlinglaurel.com/data/out/93/4749936-harry-potter-wallpapers.jpg',
				'http://az616578.vo.msecnd.net/files/2016/08/01/636056125280688886-1941562901_ebbbb61e-add3-4801-8945-7a4ecc115f11.jpg'];
var slideIndex = 0;					
var n = myimg.length;					
function nextimg(){
	
    slideIndex++;
	  if(slideIndex >= myimg.length)
	           {slideIndex = 0;};
      document.body.style.backgroundImage="url('"+myimg[slideIndex]+"')";
      
         }					
function previmg(){
	
    slideIndex--;
	  if(slideIndex < 0)
	           {slideIndex = myimg.length-1 ;};
      document.body.style.backgroundImage="url('"+myimg[slideIndex]+"')";
      
         }					


var i=0;
var timeId;
 
function changeBg(){
	//slideIndex= 0;
	i = 1;
	 document.body.style.backgroundImage = "url('"+myimg[slideIndex]+"')";
	 slideIndex++;
	if(slideIndex>=  n ){
	     slideIndex=0;
	}
	 timeId = setTimeout(changeBg,2000);
}

function play(){
	if (i == 0){
  		changeBg();
  	}	
  }																																																											
	
function stopMe(){
	clearTimeout(timeId);
	i = 0;
	       }
function keyfn(op){
	var keybtn = op.keycode || op.which;
	if (keybtn == 37){
		previmg();
		document.getElementById('but1').style.transform = "scale(1.5)";
	}
	if (keybtn == 39){
		nextimg();
		document.getElementById('but2').style.hover.transform = "scale(1.5)";
	}
	if (keybtn == 13){
		play();
	}
	if (keybtn == 32){
		stopMe();
	}
}	       

