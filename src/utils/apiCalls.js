
export const getAttempts = () => {
    fetch(`${process.env.TERRENE_API}/attempts`)
    .then(res => res.json())
    .then((data) => {
        // this.setState({ attempts: data });
        return(data);
     
    })
    .catch(console.log)
}