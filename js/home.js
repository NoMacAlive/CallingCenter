//one of them will be 0

window.addEventListener('scroll',function(e) {

    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
            document.getElementById('header').className='smallheader';
            document.getElementById('navigation').className='smallnav';
            console.log("Here")

	}else if (document.body.scrollTop <= 1 || document.documentElement.scrollTop <=1) {
		    document.getElementById('header').className='bigheader';
			document.getElementById('navigation').className='bignav';
            console.log("Here1")
		}
});