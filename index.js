var form = document.getElementById("myform")

        function handleform(e) {
            e.preventDefault()

            var Celcius = document.getElementById('cel').value;

            var f = Celcius * 1.8 + 32
            document.getElementById("tempf").innerHTML = `The Tempreture in Fahrenit is : ${f}`

        }
        form.addEventListener('submit', handleform)