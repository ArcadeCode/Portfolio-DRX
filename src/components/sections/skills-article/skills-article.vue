<script setup lang="ts">
const experiences = [
    {
        title: "Dev backend",
        images: [
            {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
                alt: "vuejs logo",
            },
            {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                alt: "typescript logo",
            },
            {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                alt: "javascript logo",
            },
            {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
                alt: "sass logo",
            },
        ],
    },
    {
        title: "Dev frontend",
        images: [
            {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                alt: "python logo",
            },
            {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
                alt: "cplusplus logo",
            },
        ],
    },
    {
        title: "Dev environments",
        images: [
            {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                alt: "nodejs logo",
            },
            {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cmake/cmake-original.svg",
                alt: "cmake logo",
            },
        ],
    },
    {
        title: "Working management",
        images: [
            {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
                alt: "vscode logo",
            },
            {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
                alt: "git logo",
            },
            {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
                alt: "github logo",
                style: "filter: invert()",
            },
        ],
    },
];
</script>

<template>
    <article>
        <h4>Most notable experiences</h4>
        <ol>
            <li v-for="(item, index) in experiences" :key="index">
                <p>{{ item.title }}</p>
                <div v-for="(img, imgIndex) in item.images" :key="imgIndex">
                    <img :src="img.src" :alt="img.alt" :height="40" />
                </div>
            </li>
            <li><p>Oral languages : 🇫🇷 French [natif], 🇬🇧 English B2+</p></li>
        </ol>
    </article>
</template>

<style scoped lang="scss">
ol {
    padding: 10px 0;
    width: fit-content;

    border-radius: 8px;
    background-color: var(--color-background-soft);
}

li {
    width: fit-content;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    align-items: left;
    text-align: left;

    & > p {
        width: fit-content;
        align-items: left;
    }
    & > div {
        width: fit-content;
    }
}

p {
    text-align: center;
    font-weight: bold;
    margin-right: 10px;
}

li:nth-last-child(1) p {
    text-align: center;
    margin-right: 0;
    width: 100%;
}

/* Share between all screen size */
article {
    padding: 3px;
    margin: 3px;
}

div {
    padding: 0 3px;
}

p {
    text-align: right;
    font-weight: bold;
    margin-right: 10px;
}

li:nth-last-child(1) p {
    text-align: center;
    margin-right: 0;
    width: 100%;
}
</style>

<style scoped src="./phone-screen.scss" lang="scss"></style>
