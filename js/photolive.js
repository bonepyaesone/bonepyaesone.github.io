var Photolive = Photolive || {};Photolive.message = function(){ return '<div style="padding:5px;font-size:13px;" class="'+arguments[1]+'">'+arguments[0]+'</div>';};Photolive.site = 'getphotolive.com';Photolive.showInfo = function (e, t) {var n = '<div class="photolive-info"><table border="0"><td>' + t +'</td><td> <a href="#" id="photolive-close">'+'[x] Close PhotoLive</a></td></table></div>',i = $(".photolive-info");if(i.length<1) e.append(n);i.hide().fadeIn('slow');};Photolive.css = function(){var e = ".photolive-info{padding:40px;position:fixed;top:10%;left:25%;z-index:999999;border-radius:10px;-moz-border-radius:10px;-webkit-border-radius:10px;box-shadow:0 0 100px #333;-moz-box-shadow:0 0 100px #333;-webkit-box-shadow:0 0 100px #333;background:#fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAAQCAYAAABN0MIqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABA5JREFUeNpi/P//P8MogACm0SAYDYzRwCAEWEjVkLP1rsyXn3+9ediZt07xVn7CyMhIE4f19vaa//z506CqqmomPnXULPOwBob2lLMvH334KYYsZibDe2xvgq71k48/O/be+xDtrCSwFCgcQ4plYh0nfoLoVxUW7ITUXr9+ffnjx48V29raGNADxN/fH2zOxo0b2WmeMmABAfLwz7//BM89++py6slnq9CV1ydSYtm333/ZqOFoaWnpm3TPJhuitMAxH7Ds2hJQavj9978wTO7Sy69+vC3H/vM0H2WwkefbtiNO1xsca0uvLjn++HMoyONcrMy/LGV5V2+M1o7xWHR565GHn8B6jaaduwdMaZF//v2XPPfsS9+tt98VQeJqwpz3jaR4iuYEqG3A566nT5+qw9gBAQE/OTg4fq5YsYIPxE9NTb33+vVr6Q0bNrDX19dPvHnzZuKHDx94gWp+qaqq7unu7vYmKzBAgQBLGSA+KzPjW1iAfP31j91DVXDSoQefMoCe9ErZcCvgw48/jjtuv4+WE2B/pSXKt+La628RoEAMWXHtLVDLHZi5svzsx5iZGJ/uvPN+9+uvv3mhWY4BpPb9jz+LgEw+fO768eMHPIWBAgLk2a6urgAQH5S1xMXFX4H4J0+ezAMFgrW1dd2dO3dyLl++7AUKoMbGxnySaxOQ40AeBbFBsb86XBNuCCjGQXwZPranID4wkMTvvfvhC2IbSPBMWROhlQ+iQXyQOIgP0wtKKaBCGBQQoIAD8UEYxAaJxa+9mU5s0lZXV58PooGpIRWEQWwFBYUVHz9+DIFlKRYWllcyMjK7Qfxnz575kpUyPtdYkVVVsDIxvkKm8QEOZqav2NjEAkFBwW5g7GcAU4QtNKX8AokBA6YDxH/79q3Cr1+/ysEpUlb2vpSU1Ga6tDNAyR9E33n3PTtj021zEI0sDgPZW+7IgKpmUJkCKi9AKQGEQWyQGEgOpvbLly+2wBolHYbR7SwoKHiiqKh4BpRVQBjEBokBAwVcyLKzs3/X1ta2k5OTmw8qS/78+SNMcsoAOYrUwJDhZ68AFoJWF1981QXiE7BCESQOYoOyAaimWnj+5WNQVW2nwDcDVOasvfZmBsxOkNhUH5UnKSkpYDPPnj0bDaSiYXbU1dVpAcsC1EiQlS0CVsVg+yQlJbtBdG1tbXNhYaEHUNxqx44dj2Gphp+ffw1JgRGhKxqIz8PBWiKHYbEHqhV0xbkNFgarw9oCSqDCFFSGAAvcl6Ca4RxUwlFRwBhUVoDYIP0gTwNTSTe6GIitqakZqaSkZIBuP6jN0dnZuR/E3rlzJ1isqKjoJDDGwW4uKyuD10T9/f3WfX194MYbiF9ZWYm3Acc42msd7ZtgBQABBgBzFe+0iXGHFwAAAABJRU5ErkJggg%3D%3D) no-repeat 2px 2px;}button#PhButton {display:block;float:left;width:150px;text-align:center;border-radius:4px;border:1px solid #32759a;background:#8dcaec;background:-webkit-linear-gradient(top,#8dcaec,#0c83c5);background:-moz-linear-gradient(top,#8dcaec,#0c83c5);background:-linear-gradient(top,#8dcaec,#0c83c5);color:#000;font:bold 14px lucida grande,arial;text-shadow:0px 1px 0.5px #60bbee;padding:10px; cursor:pointer;box-shadow:inset 1px 1px 1px #c5e4f6;}button#PhButton:hover {background:#8dcaec;background:-webkit-linear-gradient(top,#8dcaec,#50a4d2);background:-moz-linear-gradient(top,#8dcaec,#50a4d2); background:linear-gradient(top,#8dcaec,#50a4d2); text-shadow:0 1px 0.5px #c5e4f6; } button#PhButton:active { background:#0c83c5; background:-webkit-linear-gradient(top,#0c83c5,#50a4d2); background:-moz-linear-gradient(top,#0c83c5,#50a4d2); background:-linear-gradient(top,#0c83c5,#50a4d2);}button#PhHigh {display:block;float:left;width:150px;margin-left:10px;text-align:center;border-radius:4px;border:1px solid #32759a;background:#36cf3b;background:-webkit-linear-gradient(top,#36cf3b,#0c7a10);background:-moz-linear-gradient(top,#36cf3b,#0c7a10);background:-linear-gradient(top,#36cf3b,#0c7a10);color:#eee;font:bold 14px lucida grande,arial;text-shadow:0px 1px 1px #000;padding:10px; cursor:pointer;box-shadow:inset 1px 1px 1px #c5e4f6;}button#PhHigh:hover {background:#36cf3b;background:-webkit-linear-gradient(top,#36cf3b,#2aad16);background:-moz-linear-gradient(top,#36cf3b,#2aad16);background:linear-gradient(top,#36cf3b,#2aad16);}button#PhHigh:active {background:#166e12;background:-webkit-linear-gradient(top,#166e12,#2aad16);background:-moz-linear-gradient(top,#166e12,#2aad16);background:-linear-gradient(top,#166e12,#2aad16);}a.photolive-download-link{ font-weight:bold; }#PhotoLive-set{ margin:0; padding:0; visibility:hidden; }#headNav .lfloat{ position:relative; }pbtn{position: absolute;top: 8px;right: -74px;cursor:pointer;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAAQCAYAAABN0MIqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABA5JREFUeNpi/P//P8MogACm0SAYDYzRwCAEWEjVkLP1rsyXn3+9ediZt07xVn7CyMhIE4f19vaa//z506CqqmomPnXULPOwBob2lLMvH334KYYsZibDe2xvgq71k48/O/be+xDtrCSwFCgcQ4plYh0nfoLoVxUW7ITUXr9+ffnjx48V29raGNADxN/fH2zOxo0b2WmeMmABAfLwz7//BM89++py6slnq9CV1ydSYtm333/ZqOFoaWnpm3TPJhuitMAxH7Ds2hJQavj9978wTO7Sy69+vC3H/vM0H2WwkefbtiNO1xsca0uvLjn++HMoyONcrMy/LGV5V2+M1o7xWHR565GHn8B6jaaduwdMaZF//v2XPPfsS9+tt98VQeJqwpz3jaR4iuYEqG3A566nT5+qw9gBAQE/OTg4fq5YsYIPxE9NTb33+vVr6Q0bNrDX19dPvHnzZuKHDx94gWp+qaqq7unu7vYmKzBAgQBLGSA+KzPjW1iAfP31j91DVXDSoQefMoCe9ErZcCvgw48/jjtuv4+WE2B/pSXKt+La628RoEAMWXHtLVDLHZi5svzsx5iZGJ/uvPN+9+uvv3mhWY4BpPb9jz+LgEw+fO768eMHPIWBAgLk2a6urgAQH5S1xMXFX4H4J0+ezAMFgrW1dd2dO3dyLl++7AUKoMbGxnySaxOQ40AeBbFBsb86XBNuCCjGQXwZPranID4wkMTvvfvhC2IbSPBMWROhlQ+iQXyQOIgP0wtKKaBCGBQQoIAD8UEYxAaJxa+9mU5s0lZXV58PooGpIRWEQWwFBYUVHz9+DIFlKRYWllcyMjK7Qfxnz575kpUyPtdYkVVVsDIxvkKm8QEOZqav2NjEAkFBwW5g7GcAU4QtNKX8AokBA6YDxH/79q3Cr1+/ysEpUlb2vpSU1Ga6tDNAyR9E33n3PTtj021zEI0sDgPZW+7IgKpmUJkCKi9AKQGEQWyQGEgOpvbLly+2wBolHYbR7SwoKHiiqKh4BpRVQBjEBokBAwVcyLKzs3/X1ta2k5OTmw8qS/78+SNMcsoAOYrUwJDhZ68AFoJWF1981QXiE7BCESQOYoOyAaimWnj+5WNQVW2nwDcDVOasvfZmBsxOkNhUH5UnKSkpYDPPnj0bDaSiYXbU1dVpAcsC1EiQlS0CVsVg+yQlJbtBdG1tbXNhYaEHUNxqx44dj2Gphp+ffw1JgRGhKxqIz8PBWiKHYbEHqhV0xbkNFgarw9oCSqDCFFSGAAvcl6Ca4RxUwlFRwBhUVoDYIP0gTwNTSTe6GIitqakZqaSkZIBuP6jN0dnZuR/E3rlzJ1isqKjoJDDGwW4uKyuD10T9/f3WfX194MYbiF9ZWYm3Acc42msd7ZtgBQABBgBzFe+0iXGHFwAAAABJRU5ErkJggg%3D%3D) no-repeat 0px -2px;text-indent: -9000px;width: 70px;background-color: white;}.ph-clear {clear:both;}",t = document.createElement("style");t.type = "text/css",t.innerHTML = e,document.getElementsByTagName("head")[0].appendChild(t);};Photolive.init = function(){var loc= window.location.href,album = loc.search("photos_albums") == -1 ? 0 : 1,disp= $("body"),pics= [],thumb = $(".uiMediaThumb");if(album){Photolive.showInfo(disp, Photolive.message("Click on an Album then click the PhotoLive button to Download."));}else {Photolive.showInfo(disp, "<button id='PhHigh'>Download Photos</button>");disp.after('<form method="post" action="http://'+Photolive.site+'/download?title=' +escape(document.title) + '" id="PhotoLive-set" target="_blank">' +'</form>');$(".uiMediaThumb").each(function () {var e = $(this).attr("ajaxify") + '';if (e === "undefined" || e == "" ) {var b = $(this).children(".uiMediaThumbWrap").children("i").attr("style");if(b){b = b.replace(/(.+?)http/g, 'http').split('jpg');var t = b[0] + "jpg";t = t.replace("a.jpg", "n.jpg");pics.push(t);}}else {e = e.split("src="),e = unescape(e[1]);pics.push(e);}});$(".scaledImageFitWidth, uiPhotoThumb img.img, .fbPhotoImage").each(function(){var hrefs = $(this).attr('src'),href= hrefs.split('/'),link= (href[6]) ? href[0] + '//' + href[2] + '/' + href[3] + '/' + href[6] : hrefs;pics.push(link);});for(var a = 0; a<pics.length; a++)$("#PhotoLive-set").append('<input class="photolive-input" type="hidden" name="PH' + a + '" value="' + pics[a] + '">');Photolive.total = $(".photolive-input").length;$(".photolive-info").append(Photolive.message('About '+ Photolive.total +' photo'+(Photolive.total==1?'':'s')+' ready for download.'));}$("button#PhButton,button#PhHigh").live("click",function(){if(Photolive.total==0)return false;$("#PhotoLive-set").submit();});$("#photolive-close").live("click",function(){Photolive = {};$(".photolive-info, #PhotoLive-set").remove();return false;});Photolive.css();};(function(){if (typeof jQuery == "undefined") {var p = document.createElement("script");p.setAttribute("type", "text/javascript"),p.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/1.6/jquery.min.js"),p.onreadystatechange = function () {(this.readyState == "complete" || this.readyState == "loaded") && Photolive.init();};document.getElementsByTagName("head")[0].appendChild(p);p.onload = setTimeout(function(){Photolive.init();},300);}else Photolive.init();})();