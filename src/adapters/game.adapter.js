export default async function gameAdapter(results) {
    const parseData = results.data;
    const gamesParsed = parseData.slice(2, results.data.length)
    const array = []
    
    gamesParsed.forEach((game) => {
        array.push({
            name: game[1],
            state: game[2],
            image: game[3],
            imageUrl: game[4],
            score: game[5],
            best: game[6],
            worst: game[7],
            video: parseVideo(game[8]),
            review: game[9],
            tags: game[10]!="" ? game[10].split(",") : [],
        })
    })

    return array;
}

function parseVideo(videoString) {
    if(videoString) {
        const video = videoString.split('list=');
        const videoIdList = video[1];
        return videoIdList;
    }
    
    return null;
}
