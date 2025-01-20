
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

        // Data array
        const data = [
            ["Ishaku", "Sule", "Lere", "8108472062"],
            ["Samaila", "Emmanuel", "Lere", "8153757066"],
            ["Murtala", "Yunusa", "Lere", "9036297331"],
            ["Abdullahi", "Ibrahim", "Lere", "8180228389"],
            ["Aisha", "Abdullahi", "Lere", "8147712851"],
            ["Rabiu", "Nazifi", "Lere", "7066147345"],
            ["Lubabatu", "Murtala", "Lere", "8165712621"],
            ["Ibrahim", "Suleiman", "Lere", "9095118098"],
            ["Bala", "Bulus", "Lere", "8090940469"],
            ["Mohammed", "Ibrahim", "Lere", "7039816664"],
            ["Garba", "Aminu", "Lere", "7051226309"],
            ["Maitala", "Auwal", "Lere", "8112770302"],
            ["Yahaya", "Usman", "Lere", "8135723618"],
            ["Usman", "Muhammed", "Lere", "7067969336"],
            ["Shuaibu", "Sani", "Lere", "7068169535"],
            ["Surajo", "Kyauta", "Lere", "7033885705"],
            ["Umar", "Shuaibu", "Lere", "8062544649"],
            ["Umar", "Shuaibu", "Lere", "8062544649"],
            ["Alhassan", "Audu", "Lere", "7063798179"],
            ["Alhassan", "Audu", "Lere", "7093798179"],
            ["Ahamad", "Salisu", "Lere", "9011988967"],
            ["Haruna", "Idris", "Lere", "8065393445"],
            ["Haruna", "Idris", "Lere", "8065393445"],
            ["Rashidu", "Muhammad", "Lere", "8093146895"],
            ["Ladi", "Pama", "Lere", "7080945793"],
            ["Yau", "Abdulkadir", "Lere", "8098537776"],
            ["Dahiru", "Abdullahi", "Lere", "9022583787"],
            ["Danfulani", "Tende", "Lere", "8160751718"],
            ["Manasseh", "Bunu", "Lere", "8168779700"],
            ["Yusuf", "Adumi", "Lere", "8104687079"],
            ["Fatimah", "Abdulmajeed", "Lere", "7052391556"],
            ["Hansatu", "Sani", "Lere", "8117270544"],
            ["Rashida", "Yau", "Lere", "7082725609"],
            ["Muhammadu", "Fatima", "Lere", "7087135840"],
            ["Kamaludeen", "Abubakar", "Lere", "9037239977"],
            ["Aishatu", "Abdullahi", "Lere", "9095784765"],
            ["Abdullahi", "Usaini", "Lere", "7066541995"],
            ["Salamatu", "Waziri", "Lere", "7067639179"],
            ["Samaila", "Usman", "Lere", "8128047271"],
            ["Abdulrahim", "Suleiman", "Lere", "8037494830"],
            ["Sani", "Nuhu", "Lere", "9048284599"],
            ["Saadatu", "Ahmed", "Lere", "8145747137"]
        ];

        $(document).ready(function () {
            // Dynamically populate the table
            const tbody = $("#entriesTable tbody");
            data.forEach((entry, index) => {
                const row = `<tr>
                    <td>${index + 1}</td>
                    <td>${entry[0]}</td>
                    <td>${entry[1]}</td>
                    <td>${entry[2]}</td>
                    <td>${entry[3]}</td>
                </tr>`;
                tbody.append(row);
            });

            // Initialize DataTable
            $('#entriesTable').DataTable({
                paging: true,
                searching: true,
                pageLength: 10,
                lengthMenu: [10, 25, 50, 100],
            });
        });
        L.circleMarker([7.3775, 3.947], { color: markerColors.sheepGoat, radius: 8 }).addTo(map).bindPopup('Ibadan - Sheep/Goat');
        L.circleMarker([7.55, 3.9], { color: markerColors.eggs, radius: 8 }).addTo(map).bindPopup('Oyo - Eggs');
        L.circleMarker([7.6, 3.95], { color: markerColors.broilers, radius: 8 }).addTo(map).bindPopup('Eruwa - Broilers');
        L.circleMarker([7.4, 4.0], { color: markerColors.dairy, radius: 8 }).addTo(map).bindPopup('Iseyin - Dairy');
    
    