
export const getAttempts = () => {
    fetch(`http://45.77.222.45:3000/attempts`)
    .then(res => res.json())
    .then((data) => {
        // this.setState({ attempts: data });
        return(data);
     
    })
    .catch(console.log)
}