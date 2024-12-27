// Sidebar toggle
        const toggleButton = document.getElementById("menu-toggle");
        const wrapper = document.getElementById("wrapper");

        toggleButton.addEventListener("click", () => {
            console.log("Button clicked");
            wrapper.classList.toggle("toggled");

            if (wrapper.classList.contains("toggled")) {
                console.log("Adding active class");
                toggleButton.classList.add("active");
            } else {
                console.log("Removing active class");
                toggleButton.classList.remove("active");
            }
        });

        // Chart.js Example
        const distributionChart = new Chart(document.getElementById("distributionChart"), {
            type: "line",
            data: {
                labels: ["LGA 1", "LGA 2", "LGA 3"],
                datasets: [
                    {
                        label: "Male",
                        data: [10, 15, 20],
                        borderColor: "blue",
                        fill: false,
                    },
                    {
                        label: "Female",
                        data: [5, 10, 15],
                        borderColor: "pink",
                        fill: false,
                    },
                ],
            },
        });

        const valueChainChart = new Chart(document.getElementById("valueChainChart"), {
            type: "pie",
            data: {
                labels: ["Category 1", "Category 2", "Category 3"],
                datasets: [
                    {
                        data: [10, 20, 30],
                        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                    },
                ],
            },
        });

        const landOwnershipChart = new Chart(document.getElementById("landOwnershipChart"), {
            type: "doughnut",
            data: {
                labels: ["Self-Owned", "Rented", "Community-Owned"],
                datasets: [
                    {
                        data: [40, 30, 30],
                        backgroundColor: ["#4CAF50", "#FFC107", "#F44336"],
                    },
                ],
            },
        });

        // Leaflet Map Example
        const map = L.map("map").setView([7.3775, 3.947], 8);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
        L.marker([7.3775, 3.947]).addTo(map).bindPopup("Oyo State").openPopup();
