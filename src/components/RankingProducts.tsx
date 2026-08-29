const RankingProducts = () => {
  return (
    <section>
      <header>
        <div>
          <h2>Ranking dos produtos</h2>
          <p>Produtos mais vendidos</p>
        </div>
        <select>
          <option>Mais vendidos</option>
          <option>Maior faturamento</option>
        </select>
      </header>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Produto</th>
            <th>Vendas</th>
            <th>Faturamento</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Produto...</td>
            <td>--</td>
            <td>R$ --</td>
          </tr>

          <tr>
            <td>1</td>
            <td>Produto...</td>
            <td>--</td>
            <td>R$ --</td>
          </tr>

          <tr>
            <td>1</td>
            <td>Produto...</td>
            <td>--</td>
            <td>R$ --</td>
          </tr>

          <tr>
            <td>1</td>
            <td>Produto...</td>
            <td>--</td>
            <td>R$ --</td>
          </tr>

          <tr>
            <td>1</td>
            <td>Produto...</td>
            <td>--</td>
            <td>R$ --</td>
          </tr>

          <tr>
            <td>1</td>
            <td>Produto...</td>
            <td>--</td>
            <td>R$ --</td>
          </tr>
        </tbody>
      </table>

      <footer>
        <button>1</button>
        <button>1</button>
        <button>1</button>
      </footer>
    </section>
  );
};

export default RankingProducts;
