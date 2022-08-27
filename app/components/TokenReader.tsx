interface Props {
    contractAddress: string;
    currentAccount: string | undefined;
}

export default function TokenReader(props: Props) {
    return (
        <div>
            <p>{`ERC20 Contract: ${props.contractAddress}`}</p>
            <p>{`FakeToken balance: `}</p>
        </div>
    );
}
