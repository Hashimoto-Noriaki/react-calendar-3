import { ReactNode } from 'react'

type PropsType = {
    children:ReactNode;
}

export const PrimaryBtn = ({ children }: PropsType) => {
    return (
        <butto className="bg-lime-800 p-4 text-white text-lg rounded-lg">
            {children}
        </butto>
    );
};
