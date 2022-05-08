export default function SidebarOthers() {
    const others = [
        {
            className: "links", 
            text: `Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações
             • Contas mais relevantes • Hashtags • Idioma`
        },
        {
            className:"copyright", text:" © 2021 INSTAGRAM DO FACEBOOK"
        }
    ];

    return (
        others.map(item => <SidebarOther className={item.className} text={item.text}/>)
    );
};

function SidebarOther(props) {
    return (
        <div class={props.className}>
            {props.text}
        </div>
    );
};
