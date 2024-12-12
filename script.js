document.addEventListener('DOMContentLoaded', async () => {
    const loadJSON = async (url) => {
        const response = await fetch(url);
        return await response.json();
    };

    // Load Hero Content
    const heroData = await loadJSON('/content/hero.json');
    document.getElementById('hero-title').value = heroData.heroTitle;
    document.getElementById('hero-description').value = heroData.heroDescription;
    document.getElementById('hero-button-url').value = heroData.heroButtonUrl;
    document.getElementById('hero-image').value = heroData.heroImage; // Assuming a file input is preloaded with the file path
    document.getElementById('hero-video').value = heroData.heroVideo;

    // Load About Content
    const aboutData = await loadJSON('/content/about.json');
    document.getElementById('about-title').value = aboutData.aboutTitle;
    document.getElementById('about-description').value = aboutData.aboutDescription;
    document.getElementById('about-image').value = aboutData.aboutImage; // Assuming a file input is preloaded with the file path

    // Load Speaker Content
    const speakersData = await loadJSON('/content/speakers.json');
    document.getElementById('speaker-name').value = speakersData.speakerName;
    document.getElementById('speaker-role').value = speakersData.speakerRole;
    document.getElementById('speaker-image').value = speakersData.speakerImage; // Assuming a file input is preloaded with the file path
});
