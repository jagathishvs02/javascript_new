const button = document.querySelector('button')
button.addEventListener('click',displayStats)
function displayStats(){
    const operation=document.getElementById("input")
    const city = input.options[input.selectedIndex].value
    const operand1=document.getElementById("input1").value
    console.log(operand1)
    const operand2=document.getElementById("input2").value
    console.log(operand2)
    console.log(city)
    let ans=0
    switch(city){
        case '+':
            ans = operand1 + operand2
            break
        case '-':
            ans = operand1 - operand2
            break
        case '*':
            ans = operand1 * operand2
            break
        case '/':
            ans = operand1 / operand2
            


    }
    console.log(ans)

}  
