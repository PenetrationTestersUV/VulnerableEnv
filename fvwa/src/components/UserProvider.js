const { createContext, useState } = require("react");

let UserContext = createContext();
let { Provider, Consumer } = UserContext;

function UserProvider({children}) {
    let [userProv, setUser] = useState(null);
    const LoginUser = (user) => {
        setUser(user);
    }
    return (
        <Provider value={{userProv, LoginUser}}>
            {children}
        </Provider>
    )
}

export {UserProvider, Consumer as UserConsumer, UserContext};