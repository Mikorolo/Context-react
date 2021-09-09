import React, {createContext, useContext} from "react";
export const UserContext = createContext<string | null>(null);

const UserPage: React.FC = () => {
    const context = useContext(UserContext);
    return (
        <div>
            {context}
        </div>
    );
};

export default UserPage;