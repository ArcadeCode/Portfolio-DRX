<template>
    <header>
        <h1>Esteban Dervaux Portfolio</h1>
        <h1 id="headerNavSeparator">|</h1>
        <ol id="header-nav">
            <li><a href="#">🏠 Home</a></li>
            <li><a href="#">🪲 Skills</a></li>
            <li><a href="#">🧪 Projects</a></li>
            <li><RouterLink to="./contact">✉️ Contact me</RouterLink></li>
        </ol>
    </header>
</template>

<style scoped>
header {
    font-family: Impact, 'Arial Narrow Bold', sans-serif;
    text-align: center;
    padding: 10px 10px 10px 10px;
    margin: 10px 10px 10px 10px;
    background-color: var(--color-background-soft);
    border: #181818 solid 4px;
    border-radius: var(--block-border-radius);
    box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
}
header {
    display: flex;
    justify-content: flex-start;
}
header h1 {
    width: fit-content;
    text-align: left;
    -webkit-animation: portfolioMainTitleOpening 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
    animation: portfolioMainTitleOpening 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
}
#headerNavSeparator {
    width: 10px;
    margin: 0 10px 0 1%;
    background-color: var(--color-text);

}
#header-nav {
    list-style-type: none;
}
#header-nav li {
    align-items: center;
    margin: 2px 5px 2px 5px;
    padding: 2px 2px 2px 2px;
    border-radius: var(--block-border-radius);
    background-color: none;
    transition: background-color 0.3s ease;
} #header-nav li:hover {
    /* Little animation on hover */
    background-color: var(--color-background-dark);
}
#header-nav li a {
    text-decoration: none;
    background-color: rgba(0, 0, 0, 0) ;
}
</style>