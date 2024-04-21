<template>
    <section>
        <article>
            <h2>A propos de moi</h2>
            <p>Fan d’ingénierie depuis mes 6 ans, j'ai beaucoup expérimenté dans l’électronique et la tech, 
            je suis très motivé pour créer des projets de grande ampleurs ! J'ai commencé par m'intéresser 
            à l'électronique très tôt mais cela m'a vite passer quand j'ai découvert les jeux-vidéos, la 
            capacité qu'avait certains à pouvoir simplement écrire des lignes de codes qui deviennent des jeux 
            m'avait fasciné, c'est ainsi que je me suis lancé dedans !</p>

            <h2>Experience :</h2>
            
            <div id="github_stats">
                <a href="https://github.com/ArcadeCode" target="_blank">
                <img height="180px" src="https://github-readme-stats-drx.vercel.app/api?username=ArcadeCode&show_icons=true&theme=material-palenight&count_private=true&hide_border=true" />                
                <img height="180px" src="https://github-readme-stats-drx.vercel.app/api/top-langs?username=ArcadeCode&show_icons=true&theme=material-palenight&hide_border=true&layout=compact&lang_count=6" />
            </a>
            </div>
        </article>
    </section>
</template>

<style scoped>
section {
    margin: 10px 10px 10px 10px;
}

section #github_stats {
padding: 5px 5px 5px 5px;
display:flex;
flex-wrap: wrap;
justify-content: center;
}
section #github_stats img {
margin: 0 5px 0 5px;
}
</style>