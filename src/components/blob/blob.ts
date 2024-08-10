export function getRandomBetween(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

export function moveBlob(event: MouseEvent, blob: HTMLElement | null): void {
    // Check if blob is not null
    if (blob) {
        // Get mouse pos
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        // Get blob pos
        const blobRect = blob.getBoundingClientRect();
        const blobWidth = blobRect.width;
        const blobHeight = blobRect.height;
        // Calcul new blob pos
        const newX = mouseX - blobWidth / 2;
        const newY = mouseY - blobHeight / 2;
        // Apply new pos to blob
        blob.style.transform = `translate(${newX}px, ${newY}px)`;
    }
}

export function setBlobSize(): void {
    document.documentElement.style.setProperty(
        "--blob-size",
        getRandomBetween(50, 75) + "px"
    );
}
