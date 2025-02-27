
import "../css/cart.css";


export default function Cart() {
    return (
        <div id="cart-container">
            <h1>Cart</h1>
            <table class="table">
            <thead>
                <tr>
                    <th scope="col">NO.</th>
                    <th scope="col">Name</th>
                    <th scope="col">image</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Prices</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Bee Natural</td>
                    <td>
                        <img src="/img/lotions/1.png" alt="product"/>
                    </td>
                    <td>1</td>
                    <td>20$</td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Pomelo</td>
                    <td>
                        <img src="/img/essential oil/2.png" alt="product"/>
                    </td>
                    <td>2</td>
                    <td>10$</td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Neck Massenger</td>
                    <td>
                        <img src="/img/helping machines/2.png" alt="product"/>
                    </td>
                    <td>1</td>
                    <td>50$</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="4">Total</td>
                    <td>80$</td>
                </tr>
            </tfoot>
            </table>
        </div>
    );
    }
