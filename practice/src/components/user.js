function User() {
    return (
        <>
            <h1>List of users</h1>
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        <p> {user.name} </p>
                        <p> {user.email } </p>
                    </div>
                )
            })}
        </>
    )
}