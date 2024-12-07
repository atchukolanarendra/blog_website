// Enhanced dataset for blog articles
const articles = [
    { title: "Understanding JavaScript", category: "Technology", description: "Learn the fundamentals of JavaScript and why it's so popular." },
    { title: "The Evolution of Web Development", category: "Technology", description: "How web development has changed over the years." },
    { title: "Latest Tech Trends 2024", category: "Technology", description: "Discover the top tech trends for the upcoming year." },
    { title: "Healthy Living Tips", category: "Health", description: "Simple tips to maintain a healthier lifestyle every day." },
    { title: "Top Exercises for Busy People", category: "Health", description: "Quick exercises that fit into your hectic schedule." },
    { title: "Mindfulness and Wellness", category: "Lifestyle", description: "Practical advice on staying mindful in a busy world." },
    { title: "Work-Life Balance Hacks", category: "Lifestyle", description: "Tips and tricks to balance work and personal life." },
    { title: "Exploring the Wonders of Paris", category: "Travel", description: "A guide to the top attractions and experiences in Paris." },
    { title: "Budget-Friendly Travel Tips", category: "Travel", description: "Travel the world without breaking the bank." },
    { title: "Top 10 Beaches to Visit in 2024", category: "Travel", description: "A list of must-visit beaches for your next vacation." },
    { title: "How to Start a Successful Business", category: "Business", description: "Key steps to launch your own business and thrive." },
    { title: "Effective Leadership Strategies", category: "Business", description: "Learn how to inspire and lead your team effectively." },
    { title: "The Rise of Remote Work", category: "Business", description: "How remote work is reshaping the workplace." },
    { title: "The Future of Artificial Intelligence", category: "Technology", description: "Explore how AI is shaping our world." },
    { title: "Nutrition Tips for a Busy Lifestyle", category: "Health", description: "How to stay healthy when time is limited." },
    { title: "The Art of Minimalist Living", category: "Lifestyle", description: "Simplify your life and focus on what truly matters." },
];

// Function to render articles
function renderArticles(filteredArticles) {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";

    if (filteredArticles.length === 0) {
        resultsContainer.innerHTML = "<p>No articles found. Try a different search or filter.</p>";
        return;
    }

    filteredArticles.forEach(article => {
        const articleCard = document.createElement("div");
        articleCard.classList.add("result-card");

        articleCard.innerHTML = `
            <h3>${article.title}</h3>
            <p><strong>Category:</strong> ${article.category}</p>
            <p>${article.description}</p>
        `;

        resultsContainer.appendChild(articleCard);
    });
}

// Function to filter results based on search and category
function filterResults() {
    const searchQuery = document.getElementById("searchBox").value.toLowerCase();
    const selectedCategory = document.getElementById("filterCategory").value;

    const filteredArticles = articles.filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(searchQuery);
        const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    renderArticles(filteredArticles);
}

// Initial rendering of articles
renderArticles(articles);
