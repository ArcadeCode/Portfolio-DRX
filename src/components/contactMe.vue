<script lang="ts">
export default {
    //
}
</script>

<template>
    <div id="contactMe">
        <span>
            <h3>Besoin de me contacter ? ☎️</h3>
        </span>
        <span>
            <ul style="list-style-type: '👉';">
                <li><a target="_blank" href="mailto:e.dervauxx@gmail.com">Mail professionelle : <strong>e.dervauxx@gmail.com</strong></a></li>
                <li><a target="_blank" href="tel:">Numéro de téléphone : <strong>+33 00 00 00 00 00</strong></a></li>
                <li><a target="_blank" href="https://www.instagram.com/esteban__drx/">Instagram : <strong>@esteban__drx</strong></a></li>
            </ul>
        </span>
        <span>
            <img style="float: right;border-radius: 5px;" width="100%" height="auto" src="https://media1.tenor.com/m/DimzPZMypFcAAAAd/laptop.gif" alt="GIF of a cat who read her mails">
        </span>
        <button>Close the popup ?</button>
    </div>
</template>

<style>
#contactMe {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    border: var(--block-border-color) 4px solid;
    border-radius: var(--block-border-radius);
    background-color: var(--color-background-soft);
    width: 60%;
    height: 50%;
    margin: 5px 5px 5px 5px;
    padding: 10px 10px 10px 10px;

    display: flex;
    flex-wrap: wrap;
}
#contactMe span {
    margin: 5px 5px 5px 5px;
    width: 75%;
}
#contactMe span:nth-child(1) {
    padding: 0 5px 0 5px;
    width: 100%;
} #contactMe span:nth-child(1) h3 {
    margin: 0 0 0 0;
    width: 100%;
} #contactMe span:nth-child(3) {
    width: 20%;
} #contactMe button {
    width: 100%;
}

#contactMe a {
    text-decoration: none; /* Supprimer la décoration de lien par défaut */
    font-family: "Roboto";
}
#contactMe a::after {
    transition: background-color 0.3s ease; /* Transition pour l'animation de couleur */
}
</style>