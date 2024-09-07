import { ref } from "vue";

/*
!--<learnMap></learnMap>-->
        <!-- Here we need to use a graph generator -->
        <!-- But basically :
                - 8ans = Découverte de l'info
                - 6ème = Découverte de Scratch
                - 5ème = Découverte de Python
                - Pandemie = Découverte du WEB 2.0
                - Seconde, Première = Découverte du WEB 3.0 et C/C++ 
                -->
*/

const events = ref([
    {
        id: 1,
        date: "2012",
        title: "Discoverd IT",
        description:
            "Discovered the base of what will became my main goal in life",
    },
    {
        id: 2,
        date: "",
        title: "Saint-Valentin",
        description: "Célébrons l'amour.",
    },
]);

export default events;
