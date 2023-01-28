export const BASE_URL = "http://localhost:3000/api"

export async function fetchReports() {
try {
    const res = await fetch(`${BASE_URL}/reports`)
        const data = await res.json();
        return data.reports;
    }catch(error){
        console.log(error);
    }
}
