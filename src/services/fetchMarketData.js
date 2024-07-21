// Function to fetch real-time data
const fetchRealTimeData = async () => {
  try {
    const response = await fetch('https://api.livecoinwatch.com/coins/single', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '4594e493-d682-4c33-9b67-a9fe52dd813e'
      },
      body: JSON.stringify({ currency: 'USD', code: 'BTC' })
    });
    const data = await response.json();
    console.log(data); // Process and update your UI with the latest data
  } catch (error) {
    console.error('Error fetching real-time data:', error);
  }
};

// Polling every 10 seconds
setInterval(fetchRealTimeData, 10000);
