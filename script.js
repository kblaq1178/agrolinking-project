// Sidebar Toggle
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Distribution Chart
const distributionCtx = document.getElementById('distributionChart').getContext('2d');
new Chart(distributionCtx, {
    type: 'line',
    data: {
        labels: ['Aba', 'Afijio', 'Egbeda', 'Ibadan North', 'Ibarapa East', 'Lagelu', 'Oyo East'],
        datasets: [
            {
                label: 'Male',
                data: [150, 120, 90, 140, 110, 130, 100],
                borderColor: 'blue',
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)'
            },
            {
                label: 'Female',
                data: [30, 20, 15, 35, 25, 30, 20],
                borderColor: 'orange',
                fill: true,
                backgroundColor: 'rgba(255, 159, 64, 0.2)'
            }
        ]
    }
});

// Value Chain Chart
const valueChainCtx = document.getElementById('valueChainChart').getContext('2d');
new Chart(valueChainCtx, {
    type: 'doughnut',
    data: {
        labels: ['Sheep/Goat', 'Eggs', 'Broilers', 'Pig', 'Dairy', 'Feed'],
        datasets: [{
            data: [40, 30, 20, 10, 15, 25],
            backgroundColor: ['#4CAF50', '#FFC107', '#FF5722', '#2196F3', '#9C27B0', '#607D8B']
        }]
    }
});

// Land Ownership Chart
const landOwnershipCtx = document.getElementById('landOwnershipChart').getContext('2d');
new Chart(landOwnershipCtx, {
    type: 'pie',
    data: {
        labels: ['Self Owned', 'Rented', 'Lease', 'Community Owned'],
        datasets: [{
            data: [50, 20, 15, 15],
            backgroundColor: ['#4CAF50', '#FFC107', '#FF5722', '#2196F3']
        }]
    }
});

// Crisis History Chart
const crisisHistoryCtx = document.getElementById('crisisHistoryChart').getContext('2d');
new Chart(crisisHistoryCtx, {
    type: 'doughnut',
    data: {
        labels: ['Resolved', 'Ongoing', 'Mitigated'],
        datasets: [{
            data: [70, 20, 10],
            backgroundColor: ['#4CAF50', '#FF5722', '#FFC107']
        }]
    }
});

// Map
const map = L.map('map').setView([7.3775, 3.947], 8);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Example markers
const markerColors = {
    sheepGoat: 'green',
    eggs: 'orange',
    broilers: 'red',
    dairy: 'blue'
};

L.circleMarker([7.3775, 3.947], { color: markerColors.sheepGoat, radius: 8 }).addTo(map).bindPopup('Ibadan - Sheep/Goat');
L.circleMarker([7.55, 3.9], { color: markerColors.eggs, radius: 8 }).addTo(map).bindPopup('Oyo - Eggs');
L.circleMarker([7.6, 3.95], { color: markerColors.broilers, radius: 8 }).addTo(map).bindPopup('Eruwa - Broilers');
L.circleMarker([7.4, 4.0], { color: markerColors.dairy, radius: 8 }).addTo(map).bindPopup('Iseyin - Dairy');