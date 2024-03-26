

function Mapp() {
    let arr = [1, 2, 3, 4, 5]
    let arr2 = [10, 20, 30, 40, 50]
    let r = Math.floor(Math.random() * 5);

    return (
        <div>
            {


                arr2.map((item, index) => {
                    return item
                })
            }
        </div>

    )
}

export default Mapp