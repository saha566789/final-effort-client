

const UserHome = () => {
    return (
        <h2 className="text-3xl">
        <span>Hi, Welcome</span>
        {
            user?.displayName ? user.displayName : 'Back'
        }
    </h2>
    );
};

export default UserHome;