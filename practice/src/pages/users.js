function UserDetails() {
    return (
        <>
        <h1>this is users page</h1>
        </>
    )
}

export default UserDetails

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
}