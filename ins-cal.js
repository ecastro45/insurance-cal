function total() {
    let rte1 = parseFloat(document.getElementById('val$').value);
    let rte2 = parseFloat(document.getElementById('valRate').value); 
    let surCharge = rte1 * rte2; 
    let ept = surCharge * .036;
    let totalCharge = surCharge + ept;
        
    document.getElementById('price').value = "$" + totalCharge;
};
