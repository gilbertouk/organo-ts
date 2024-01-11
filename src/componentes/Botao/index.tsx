import './botao.css';

interface BotaoPros {
  texto: string;
}

const Botao = ({ texto }: BotaoPros) => {
  return <button className="botao">{texto}</button>;
};

export default Botao;
