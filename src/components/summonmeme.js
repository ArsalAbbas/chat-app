import axios from 'axios'

function SummonMeme() {
    const getMeme=()=>{
        try {
            axios.get('https://meme-api.com/gimme')
            .then((response) => {
                const memeImage=document.getElementById('memeImage')
                memeImage.src= response.data.url
            });
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
        <button onClick={getMeme}>
            Get a random meme
        </button> <br />
        <img id='memeImage' alt="Please Retry" />
    </div>
  )
}

export default SummonMeme