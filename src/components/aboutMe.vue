<template>
    <section>
        <article>
            <h5>About-me</h5>
            <p>Fan of IT from my 6 years I experimented a lot in tech and I'm motivate to make some impressive projects</p>
            
            <div style="display:flex; align-items:center;">
                <a href="https://github.com/ArcadeCode" target="_blank">
                    <img id="targetImgForGetSize" src="https://github-readme-stats.vercel.app/api?username=ArcadeCode&show_icons=true&theme=material-palenight&count_private=true&hide_border=true" />
                </a>
                <a href="https://github.com/ArcadeCode" target="_blank">
                    <img id="targetImgToSetSize" src="https://github-readme-stats.vercel.app/api/top-langs?username=ArcadeCode&show_icons=true&theme=material-palenight&hide_border=true&layout=compact" />
                </a>
                
            </div>
        </article>
    </section>
</template>
<!--
<script>
    // Get first image size x and y and force the second img to get resize
    // I think it's best to change this directly on vercel but... I'm lazy ^^
    var img = document.getElementById("targetImgForGetSize"); 
    var width = img.clientWidth;
    var height = img.clientHeight;
    
    var resizeImg = document.getElementById("targetImgForGetSize")
    resizeImg.style.height = height+" px"
    resizeImg.style.width = width+" px"
    console.log("test");
</script>
-->