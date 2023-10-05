const quizQuestions = {
    "Python": [
        {
            "question": "What is the output of the following code?\n\nx = 5\ny = 2\nprint(x // y)",
            "options": [
                { "text": "2.5", "correct": false },
                { "text": "2", "correct": true },
                { "text": "3", "correct": false },
                { "text": "2.0", "correct": false }
            ],
            "explanation": "The '//' operator performs integer division, so 5 // 2 equals 2."
        },
        {
            "question": "Which of the following is a valid Python comment?",
            "options": [
                { "text": "# This is a comment", "correct": true },
                { "text": "// This is a comment", "correct": false },
                { "text": "/* This is a comment */", "correct": false },
                { "text": "' This is a comment", "correct": false }
            ],
            "explanation": "In Python, comments are denoted by '#' at the beginning of a line."
        },
        {
            "question": "What is the correct way to declare a list in Python?",
            "options": [
                { "text": "list = [1, 2, 3]", "correct": true },
                { "text": "array(1, 2, 3)", "correct": false },
                { "text": "{1, 2, 3}", "correct": false },
                { "text": "list(1, 2, 3)", "correct": false }
            ],
            "explanation": "The correct way to declare a list in Python is by using square brackets."
        },
        {
            "question": "What will be the value of 'result' after executing this code?\n\nresult = 0\nfor i in range(1, 6):\n    result += i",
            "options": [
                { "text": "0", "correct": false },
                { "text": "15", "correct": true },
                { "text": "10", "correct": false },
                { "text": "6", "correct": false }
            ],
            "explanation": "This code calculates the sum of numbers from 1 to 5, so the value of 'result' will be 15."
        },
        {
            "question": "Which of the following is NOT a valid data type in Python?",
            "options": [
                { "text": "int", "correct": false },
                { "text": "float", "correct": false },
                { "text": "boolean", "correct": true },
                { "text": "string", "correct": false }
            ],
            "explanation": "Python has 'bool' for boolean data type, not 'boolean'."
        },
        {
            "question": "What is the output of 'print('Hello' + ' ' + 'World')'?",
            "options": [
                { "text": "Hello World", "correct": true },
                { "text": "Hello+World", "correct": false },
                { "text": "HelloWorld", "correct": false },
                { "text": "Error", "correct": false }
            ],
            "explanation": "The '+' operator concatenates strings, so the output will be 'Hello World'."
        },
        {
            "question": "Which keyword is used to define a function in Python?",
            "options": [
                { "text": "def", "correct": true },
                { "text": "function", "correct": false },
                { "text": "define", "correct": false },
                { "text": "func", "correct": false }
            ],
            "explanation": "In Python, the 'def' keyword is used to define a function."
        },
        {
            "question": "What is the correct way to open a file 'data.txt' for reading in Python?",
            "options": [
                { "text": "file = open('data.txt', 'r')", "correct": true },
                { "text": "file = read('data.txt', 'r')", "correct": false },
                { "text": "file.open('data.txt', 'read')", "correct": false },
                { "text": "open.file('data.txt', 'r')", "correct": false }
            ],
            "explanation": "The 'open' function is used to open files for reading in Python."
        },
        {
            "question": "What does the 'len()' function return in Python?",
            "options": [
                { "text": "Total memory used by an object", "correct": false },
                { "text": "Length of a list or string", "correct": true },
                { "text": "The largest integer less than or equal to a number", "correct": false },
                { "text": "The smallest integer greater than or equal to a number", "correct": false }
            ],
            "explanation": "The 'len()' function returns the length of a list or string in Python."
        },
        {
            "question": "How do you comment out multiple lines of code in Python?",
            "options": [
                { "text": "/* This is a comment */", "correct": false },
                { "text": "# This is a comment", "correct": false },
                { "text": "''' This is a comment '''", "correct": true },
                { "text": "// This is a comment", "correct": false }
            ],
            "explanation": "To comment out multiple lines of code, you can use triple quotes ('''...''')."
        }
    ],

    "SQL": [
        {
            "question": "What does SQL stand for?",
            "options": [
                { "text": "Structured Query Language", "correct": true },
                { "text": "Structured Query Logic", "correct": false },
                { "text": "System Query Language", "correct": false },
                { "text": "System Query Logic", "correct": false }
            ],
            "explanation": "SQL stands for 'Structured Query Language' and is used for managing and manipulating relational databases."
        },
        {
            "question": "Which SQL command is used to retrieve data from a database?",
            "options": [
                { "text": "GET", "correct": false },
                { "text": "FETCH", "correct": false },
                { "text": "SELECT", "correct": true },
                { "text": "RETRIEVE", "correct": false }
            ],
            "explanation": "The 'SELECT' command is used to retrieve data from a database in SQL."
        },
        {
            "question": "Which SQL clause is used to filter records in a SELECT statement?",
            "options": [
                { "text": "FILTER BY", "correct": false },
                { "text": "WHERE", "correct": true },
                { "text": "CONDITION", "correct": false },
                { "text": "LIMIT", "correct": false }
            ],
            "explanation": "The 'WHERE' clause is used to filter records in a SELECT statement based on specified conditions."
        },
        {
            "question": "What SQL command is used to update data in a database?",
            "options": [
                { "text": "UPDATE", "correct": true },
                { "text": "MODIFY", "correct": false },
                { "text": "CHANGE", "correct": false },
                { "text": "ALTER", "correct": false }
            ],
            "explanation": "The 'UPDATE' command is used to modify existing data in a database."
        },
        {
            "question": "Which SQL command is used to add new records to a database?",
            "options": [
                { "text": "INSERT INTO", "correct": true },
                { "text": "ADD RECORD", "correct": false },
                { "text": "CREATE", "correct": false },
                { "text": "APPEND", "correct": false }
            ],
            "explanation": "The 'INSERT INTO' command is used to add new records to a database."
        },
        {
            "question": "What is the primary key in a SQL table used for?",
            "options": [
                { "text": "To store binary data", "correct": false },
                { "text": "To establish relationships between tables", "correct": false },
                { "text": "To uniquely identify rows in the table", "correct": true },
                { "text": "To sort data in ascending order", "correct": false }
            ],
            "explanation": "The primary key in a SQL table is used to uniquely identify each row in the table."
        },
        {
            "question": "Which SQL command is used to delete data from a database?",
            "options": [
                { "text": "DELETE", "correct": true },
                { "text": "REMOVE", "correct": false },
                { "text": "ERASE", "correct": false },
                { "text": "DISCARD", "correct": false }
            ],
            "explanation": "The 'DELETE' command is used to remove data from a database table."
        },
        {
            "question": "In SQL, which aggregate function is used to find the average value of a numeric column?",
            "options": [
                { "text": "SUM", "correct": false },
                { "text": "COUNT", "correct": false },
                { "text": "AVERAGE", "correct": false },
                { "text": "AVG", "correct": true }
            ],
            "explanation": "The 'AVG' aggregate function is used to find the average value of a numeric column in SQL."
        },
        {
            "question": "What SQL command is used to retrieve all the columns from a table named 'customers'?",
            "options": [
                { "text": "SELECT ALL FROM customers", "correct": false },
                { "text": "SELECT * FROM customers", "correct": true },
                { "text": "FETCH * FROM customers", "correct": false },
                { "text": "RETRIEVE ALL FROM customers", "correct": false }
            ],
            "explanation": "The 'SELECT * FROM customers' command is used to retrieve all columns from the 'customers' table."
        },
        {
            "question": "Which SQL statement is used to sort the result set in descending order?",
            "options": [
                { "text": "SORT DESCENDING", "correct": false },
                { "text": "ORDER BY DESC", "correct": false },
                { "text": "SORT BY DESC", "correct": false },
                { "text": "ORDER BY column_name DESC", "correct": true }
            ],
            "explanation": "To sort the result set in descending order, you use the 'ORDER BY column_name DESC' statement."
        }
    ],

    "PHP": [
        {
            "question": "What does PHP stand for?",
            "options": [
                { "text": "Personal Hypertext Preprocessor", "correct": false },
                { "text": "Preprocessed Hypertext Pages", "correct": false },
                { "text": "PHP: Hypertext Preprocessor", "correct": true },
                { "text": "Public Hyperlink Programming", "correct": false }
            ],
            "explanation": "PHP stands for 'PHP: Hypertext Preprocessor' and is a server-side scripting language for web development."
        },
        {
            "question": "Which symbol is used to indicate the start of PHP code within an HTML file?",
            "options": [
                { "text": "<?php", "correct": true },
                { "text": "<!php>", "correct": false },
                { "text": "<php>", "correct": false },
                { "text": "<?= ?>", "correct": false }
            ],
            "explanation": "The '<?php' symbol is used to indicate the start of PHP code within an HTML file."
        },
        {
            "question": "What is the correct way to output text in PHP?",
            "options": [
                { "text": "console.log()", "correct": false },
                { "text": "print()", "correct": false },
                { "text": "echo", "correct": true },
                { "text": "println()", "correct": false }
            ],
            "explanation": "In PHP, you can use the 'echo' statement to output text to the web page."
        },
        {
            "question": "Which PHP function is used to open a file for reading?",
            "options": [
                { "text": "open_file()", "correct": false },
                { "text": "read_file()", "correct": false },
                { "text": "fopen()", "correct": true },
                { "text": "file_open()", "correct": false }
            ],
            "explanation": "The 'fopen()' function is used to open a file for reading in PHP."
        },
        {
            "question": "What is the result of the following code?\n\n$x = 5;\n$y = '5';\nif ($x === $y) {\n    echo 'Equal';\n} else {\n    echo 'Not equal';\n}",
            "options": [
                { "text": "Equal", "correct": false },
                { "text": "Not equal", "correct": true },
                { "text": "Error", "correct": false },
                { "text": "Equal but with a warning", "correct": false }
            ],
            "explanation": "The '===' operator in PHP checks for both value and data type. Since $x is an integer and $y is a string, they are not equal."
        },
        {
            "question": "What PHP superglobal variable is used to retrieve form data after submitting an HTML form?",
            "options": [
                { "text": "$_GET", "correct": false },
                { "text": "$_POST", "correct": true },
                { "text": "$_REQUEST", "correct": false },
                { "text": "$_SESSION", "correct": false }
            ],
            "explanation": "The '$_POST' superglobal variable is used to retrieve form data after submitting an HTML form via the POST method."
        },
        {
            "question": "Which of the following is NOT a valid way to comment out code in PHP?",
            "options": [
                { "text": "// This is a comment", "correct": false },
                { "text": "# This is a comment", "correct": false },
                { "text": "/* This is a comment */", "correct": false },
                { "text": "-- This is a comment", "correct": true }
            ],
            "explanation": "PHP does not support '--' as a way to comment out code; it will result in a syntax error."
        },
        {
            "question": "What is the purpose of the 'include' and 'require' statements in PHP?",
            "options": [
                { "text": "To include external JavaScript files", "correct": false },
                { "text": "To include CSS stylesheets", "correct": false },
                { "text": "To include other PHP files", "correct": true },
                { "text": "To import database tables", "correct": false }
            ],
            "explanation": "The 'include' and 'require' statements in PHP are used to include other PHP files, allowing you to reuse code."
        },
        {
            "question": "Which PHP function is used to create a new directory?",
            "options": [
                { "text": "make_dir()", "correct": false },
                { "text": "create_folder()", "correct": false },
                { "text": "mkdir()", "correct": true },
                { "text": "new_directory()", "correct": false }
            ],
            "explanation": "The 'mkdir()' function in PHP is used to create a new directory (folder)."
        },
        {
            "question": "In PHP, what does the 'mysqli' extension primarily deal with?",
            "options": [
                { "text": "Image manipulation", "correct": false },
                { "text": "Mathematical operations", "correct": false },
                { "text": "Database operations", "correct": true },
                { "text": "File handling", "correct": false }
            ],
            "explanation": "The 'mysqli' extension in PHP is primarily used for performing database operations, especially with MySQL databases."
        }
    ],

    "JavaScript": [
        {
            "question": "What is the primary purpose of JavaScript?",
            "options": [
                { "text": "Styling web pages", "correct": false },
                { "text": "Creating web page layouts", "correct": false },
                { "text": "Adding interactivity to web pages", "correct": true },
                { "text": "Managing databases", "correct": false }
            ],
            "explanation": "The primary purpose of JavaScript is to add interactivity and dynamic behavior to web pages."
        },
        {
            "question": "Which keyword is used to declare a variable in JavaScript?",
            "options": [
                { "text": "var", "correct": true },
                { "text": "variable", "correct": false },
                { "text": "let", "correct": false },
                { "text": "v", "correct": false }
            ],
            "explanation": "The 'var' keyword is used to declare a variable in JavaScript. Other options like 'let' and 'const' are also used for variable declaration."
        },
        {
            "question": "What is the result of 'typeof null' in JavaScript?",
            "options": [
                { "text": "'null'", "correct": false },
                { "text": "'undefined'", "correct": false },
                { "text": "'object'", "correct": true },
                { "text": "'string'", "correct": false }
            ],
            "explanation": "The 'typeof null' expression in JavaScript returns 'object', which is a historical quirk and not an accurate representation of null."
        },
        {
            "question": "How do you comment out a single line of code in JavaScript?",
            "options": [
                { "text": "// This is a comment", "correct": true },
                { "text": "# This is a comment", "correct": false },
                { "text": "/* This is a comment */", "correct": false },
                { "text": "-- This is a comment", "correct": false }
            ],
            "explanation": "In JavaScript, you can use '//' to comment out a single line of code."
        },
        {
            "question": "Which built-in JavaScript function is used to print text to the console?",
            "options": [
                { "text": "console.log()", "correct": true },
                { "text": "print()", "correct": false },
                { "text": "alert()", "correct": false },
                { "text": "log()", "correct": false }
            ],
            "explanation": "The 'console.log()' function is used to print text to the console in JavaScript for debugging and logging purposes."
        },
        {
            "question": "What is the purpose of the 'addEventListener' method in JavaScript?",
            "options": [
                { "text": "To add a new HTML element to the page", "correct": false },
                { "text": "To remove an event listener", "correct": false },
                { "text": "To register a callback function to respond to an event", "correct": true },
                { "text": "To change the CSS styles of an element", "correct": false }
            ],
            "explanation": "The 'addEventListener' method is used to register a callback function to respond to a specific event on an HTML element."
        },
        {
            "question": "Which operator is used for strict equality comparison in JavaScript?",
            "options": [
                { "text": "===", "correct": true },
                { "text": "==", "correct": false },
                { "text": "=", "correct": false },
                { "text": "!==", "correct": false }
            ],
            "explanation": "The '===' operator in JavaScript performs strict equality comparison, which checks both value and data type."
        },
        {
            "question": "What does the 'NaN' value represent in JavaScript?",
            "options": [
                { "text": "Not a Number", "correct": true },
                { "text": "Negative Number", "correct": false },
                { "text": "Null", "correct": false },
                { "text": "No Argument", "correct": false }
            ],
            "explanation": "The 'NaN' value in JavaScript stands for 'Not a Number' and is used to represent the result of an invalid mathematical operation."
        },
        {
            "question": "How can you declare a constant variable in JavaScript?",
            "options": [
                { "text": "const", "correct": true },
                { "text": "var", "correct": false },
                { "text": "let", "correct": false },
                { "text": "const var", "correct": false }
            ],
            "explanation": "You can declare a constant variable in JavaScript using the 'const' keyword."
        },
        {
            "question": "Which loop in JavaScript is used for iterating over the properties of an object?",
            "options": [
                { "text": "for loop", "correct": false },
                { "text": "while loop", "correct": false },
                { "text": "do...while loop", "correct": false },
                { "text": "for...in loop", "correct": true }
            ],
            "explanation": "The 'for...in' loop in JavaScript is used for iterating over the properties of an object."
        }
    ],


    "Java": [
        {
            "question": "What is the primary purpose of the 'public' access modifier in Java?",
            "options": [
                { "text": "To make a variable accessible only within the same class", "correct": false },
                { "text": "To make a method accessible from anywhere in the same package", "correct": false },
                { "text": "To make a class accessible from any other class", "correct": false },
                { "text": "To make a method or class accessible from any other class", "correct": true }
            ],
            "explanation": "The 'public' access modifier in Java is used to make a method or class accessible from any other class, regardless of the package it belongs to."
        },
        {
            "question": "What is the Java keyword used to explicitly allocate memory for an object?",
            "options": [
                { "text": "alloc", "correct": false },
                { "text": "new", "correct": true },
                { "text": "create", "correct": false },
                { "text": "make", "correct": false }
            ],
            "explanation": "The 'new' keyword in Java is used to explicitly allocate memory for an object on the heap."
        },
        {
            "question": "Which Java keyword is used to define a constant variable?",
            "options": [
                { "text": "final", "correct": true },
                { "text": "const", "correct": false },
                { "text": "static", "correct": false },
                { "text": "immutable", "correct": false }
            ],
            "explanation": "The 'final' keyword in Java is used to define a constant variable, which cannot be changed after it is assigned a value."
        },
        {
            "question": "What is the purpose of the 'super' keyword in Java?",
            "options": [
                { "text": "To call the superclass constructor", "correct": true },
                { "text": "To access a static method of the superclass", "correct": false },
                { "text": "To create a subclass", "correct": false },
                { "text": "To override a method in the superclass", "correct": false }
            ],
            "explanation": "The 'super' keyword in Java is used to call the constructor of the superclass and initialize the inherited members of the subclass."
        },
        {
            "question": "What is the Java keyword used for multi-threading?",
            "options": [
                { "text": "threaded", "correct": false },
                { "text": "multi", "correct": false },
                { "text": "thread", "correct": true },
                { "text": "parallel", "correct": false }
            ],
            "explanation": "The 'thread' keyword in Java is used to work with multi-threading, allowing multiple threads to run concurrently."
        },
        {
            "question": "Which Java data type is used to store a single character?",
            "options": [
                { "text": "char", "correct": true },
                { "text": "string", "correct": false },
                { "text": "character", "correct": false },
                { "text": "chr", "correct": false }
            ],
            "explanation": "The 'char' data type in Java is used to store a single character, such as a letter, digit, or special symbol."
        },
        {
            "question": "What is the purpose of the 'this' keyword in Java?",
            "options": [
                { "text": "To create a new object", "correct": false },
                { "text": "To call a static method", "correct": false },
                { "text": "To refer to the current instance of the class", "correct": true },
                { "text": "To create an anonymous class", "correct": false }
            ],
            "explanation": "The 'this' keyword in Java is used to refer to the current instance of the class and is often used to disambiguate between instance variables and parameters with the same name."
        },
        {
            "question": "Which Java loop is used to iterate over a collection of elements, such as an array or ArrayList?",
            "options": [
                { "text": "for loop", "correct": false },
                { "text": "while loop", "correct": false },
                { "text": "do-while loop", "correct": false },
                { "text": "for-each loop", "correct": true }
            ],
            "explanation": "The 'for-each' loop in Java is used to iterate over a collection of elements, providing a simple and concise way to traverse arrays, lists, and other iterable objects."
        },
        {
            "question": "What is the Java keyword used to handle exceptions?",
            "options": [
                { "text": "catch", "correct": false },
                { "text": "try", "correct": true },
                { "text": "handle", "correct": false },
                { "text": "throw", "correct": false }
            ],
            "explanation": "The 'try' keyword in Java is used to define a block of code where exceptions may occur, and it is followed by 'catch' blocks to handle those exceptions."
        },
        {
            "question": "Which Java class is the superclass of all other classes?",
            "options": [
                { "text": "Object", "correct": true },
                { "text": "Class", "correct": false },
                { "text": "Superclass", "correct": false },
                { "text": "Parent", "correct": false }
            ],
            "explanation": "The 'Object' class in Java is the superclass of all other classes. Every class in Java directly or indirectly inherits from the 'Object' class."
        }
    ],

    "C": [
        {
            "question": "What is the purpose of the 'stdio.h' header file in C?",
            "options": [
                { "text": "To declare mathematical functions", "correct": false },
                { "text": "To define standard input and output functions", "correct": true },
                { "text": "To declare data types", "correct": false },
                { "text": "To include graphics in a program", "correct": false }
            ],
            "explanation": "'stdio.h' in C stands for 'standard input-output header' and is used to define standard input and output functions like 'printf' and 'scanf'."
        },
        {
            "question": "What is the correct syntax for a single-line comment in C?",
            "options": [
                { "text": "// This is a comment", "correct": true },
                { "text": "/* This is a comment */", "correct": false },
                { "text": "# This is a comment", "correct": false },
                { "text": "-- This is a comment", "correct": false }
            ],
            "explanation": "In C, you can use '//' to write a single-line comment."
        },
        {
            "question": "Which keyword is used to declare a variable in C?",
            "options": [
                { "text": "variable", "correct": false },
                { "text": "var", "correct": false },
                { "text": "int", "correct": true },
                { "text": "float", "correct": false }
            ],
            "explanation": "The 'int' keyword is used to declare integer variables in C."
        },
        {
            "question": "What is the purpose of the 'return' statement in a C function?",
            "options": [
                { "text": "To declare a variable", "correct": false },
                { "text": "To exit the program", "correct": false },
                { "text": "To indicate the end of the function and return a value", "correct": true },
                { "text": "To print output to the console", "correct": false }
            ],
            "explanation": "The 'return' statement in a C function is used to indicate the end of the function and return a value to the caller."
        },
        {
            "question": "What is the result of '5 / 2' in C?",
            "options": [
                { "text": "2.5", "correct": false },
                { "text": "2", "correct": true },
                { "text": "2.0", "correct": false },
                { "text": "2.25", "correct": false }
            ],
            "explanation": "In C, the division of two integers results in an integer, so '5 / 2' is equal to '2' (truncating the fractional part)."
        },
        {
            "question": "What is the purpose of the 'sizeof' operator in C?",
            "options": [
                { "text": "To find the size of an array", "correct": true },
                { "text": "To calculate the sum of elements", "correct": false },
                { "text": "To define the data type of a variable", "correct": false },
                { "text": "To check if a variable is initialized", "correct": false }
            ],
            "explanation": "The 'sizeof' operator in C is used to find the size (in bytes) of an object or data type, such as an array or variable."
        },
        {
            "question": "Which C operator is used for logical AND?",
            "options": [
                { "text": "&&", "correct": true },
                { "text": "||", "correct": false },
                { "text": "!", "correct": false },
                { "text": "&", "correct": false }
            ],
            "explanation": "The '&&' operator in C is used for logical AND, and it returns 'true' if both operands are 'true'."
        },
        {
            "question": "What does the 'break' statement do in a C loop?",
            "options": [
                { "text": "Ends the program", "correct": false },
                { "text": "Exits the loop and continues with the next iteration", "correct": false },
                { "text": "Exits the loop immediately", "correct": true },
                { "text": "Prints a message to the console", "correct": false }
            ],
            "explanation": "The 'break' statement in a C loop is used to exit the loop immediately, without completing the current iteration."
        },
        {
            "question": "What is the purpose of the 'include' directive in C?",
            "options": [
                { "text": "To include graphics in a program", "correct": false },
                { "text": "To import external libraries and header files", "correct": true },
                { "text": "To define data types", "correct": false },
                { "text": "To declare variables", "correct": false }
            ],
            "explanation": "The 'include' directive in C is used to import external libraries and header files, allowing you to use functions and symbols defined in those files."
        },
        {
            "question": "Which C data type is used to represent single characters?",
            "options": [
                { "text": "char", "correct": true },
                { "text": "string", "correct": false },
                { "text": "int", "correct": false },
                { "text": "float", "correct": false }
            ],
            "explanation": "The 'char' data type in C is used to represent single characters."
        }
    ],

    "C++": [
        {
            "question": "What is C++?",
            "options": [
                { "text": "A high-level programming language", "correct": true },
                { "text": "A markup language", "correct": false },
                { "text": "A database management system", "correct": false },
                { "text": "A hardware component", "correct": false }
            ],
            "explanation": "C++ is a high-level programming language known for its flexibility and power."
        },
        {
            "question": "Which symbol is used to indicate a single-line comment in C++?",
            "options": [
                { "text": "//", "correct": true },
                { "text": "/*", "correct": false },
                { "text": "*/", "correct": false },
                { "text": "#", "correct": false }
            ],
            "explanation": "In C++, the '//' symbol is used to indicate a single-line comment."
        },
        {
            "question": "What is the purpose of the 'cin' object in C++?",
            "options": [
                { "text": "To output data to the console", "correct": false },
                { "text": "To define classes and objects", "correct": false },
                { "text": "To input data from the keyboard", "correct": true },
                { "text": "To perform mathematical calculations", "correct": false }
            ],
            "explanation": "The 'cin' object in C++ is used to input data from the keyboard."
        },
        {
            "question": "Which data type is used to represent whole numbers in C++?",
            "options": [
                { "text": "int", "correct": true },
                { "text": "double", "correct": false },
                { "text": "string", "correct": false },
                { "text": "bool", "correct": false }
            ],
            "explanation": "The 'int' data type in C++ is used to represent whole numbers (integers)."
        },
        {
            "question": "What is the syntax for declaring a function in C++?",
            "options": [
                { "text": "function myFunction()", "correct": false },
                { "text": "def myFunction():", "correct": false },
                { "text": "void myFunction()", "correct": true },
                { "text": "myFunction(): void", "correct": false }
            ],
            "explanation": "The syntax for declaring a function in C++ is 'return_type function_name()'."
        },
        {
            "question": "What is the result of '5 % 2' in C++?",
            "options": [
                { "text": "2.5", "correct": false },
                { "text": "2", "correct": false },
                { "text": "1", "correct": true },
                { "text": "2.0", "correct": false }
            ],
            "explanation": "The '%' operator in C++ is used to calculate the remainder of a division, so '5 % 2' is equal to '1'."
        },
        {
            "question": "What does the 'break' statement do in a C++ loop?",
            "options": [
                { "text": "Ends the program", "correct": false },
                { "text": "Exits the loop and continues with the next iteration", "correct": false },
                { "text": "Exits the loop immediately", "correct": true },
                { "text": "Prints a message to the console", "correct": false }
            ],
            "explanation": "The 'break' statement in a C++ loop is used to exit the loop immediately, without completing the current iteration."
        },
        {
            "question": "Which C++ keyword is used to dynamically allocate memory for an object?",
            "options": [
                { "text": "new", "correct": true },
                { "text": "allocate", "correct": false },
                { "text": "malloc", "correct": false },
                { "text": "create", "correct": false }
            ],
            "explanation": "The 'new' keyword in C++ is used to dynamically allocate memory for an object on the heap."
        },
        {
            "question": "What is the purpose of the 'const' keyword in C++?",
            "options": [
                { "text": "To declare a variable as a constant", "correct": true },
                { "text": "To define a constant function", "correct": false },
                { "text": "To create a constant loop", "correct": false },
                { "text": "To specify a constant class", "correct": false }
            ],
            "explanation": "The 'const' keyword in C++ is used to declare a variable as a constant, which means its value cannot be changed after initialization."
        },
        {
            "question": "Which C++ header file should be included to work with input and output operations?",
            "options": [
                { "text": "<iostream>", "correct": true },
                { "text": "<stdio.h>", "correct": false },
                { "text": "<stdlib.h>", "correct": false },
                { "text": "<math.h>", "correct": false }
            ],
            "explanation": "To work with input and output operations in C++, you should include the '<iostream>' header file."
        }
    ],

    "Swift": [
        {
            "question": "What is Swift?",
            "options": [
                { "text": "A programming language for machine learning", "correct": false },
                { "text": "A programming language for web development", "correct": false },
                { "text": "A programming language for iOS, macOS, watchOS, and tvOS app development", "correct": true },
                { "text": "A markup language for creating web pages", "correct": false }
            ],
            "explanation": "Swift is a programming language developed by Apple for building apps across various Apple platforms, including iOS, macOS, watchOS, and tvOS."
        },
        {
            "question": "Which company created Swift?",
            "options": [
                { "text": "Google", "correct": false },
                { "text": "Microsoft", "correct": false },
                { "text": "Apple", "correct": true },
                { "text": "IBM", "correct": false }
            ],
            "explanation": "Swift was created by Apple Inc. as a replacement for Objective-C in the development of Apple platform applications."
        },
        {
            "question": "What is the purpose of Optionals in Swift?",
            "options": [
                { "text": "To force unwrapping of variables", "correct": false },
                { "text": "To represent values that may be missing or nil", "correct": true },
                { "text": "To create optional functions", "correct": false },
                { "text": "To enable multiple return values from a function", "correct": false }
            ],
            "explanation": "Optionals in Swift are used to represent values that may be missing or nil. They allow developers to handle the absence of a value in a safe and controlled way."
        },
        {
            "question": "What is the keyword used to define a constant in Swift?",
            "options": [
                { "text": "let", "correct": true },
                { "text": "var", "correct": false },
                { "text": "const", "correct": false },
                { "text": "final", "correct": false }
            ],
            "explanation": "In Swift, you use the 'let' keyword to define a constant, which is a value that cannot be changed after it's assigned."
        },
        {
            "question": "What is the Swift type inference feature?",
            "options": [
                { "text": "A feature that automatically converts data types", "correct": false },
                { "text": "A feature that determines the type of a variable based on its initial value", "correct": true },
                { "text": "A feature that enforces strong data typing", "correct": false },
                { "text": "A feature that generates random data types", "correct": false }
            ],
            "explanation": "Swift's type inference feature allows the compiler to automatically determine the type of a variable based on its initial value, reducing the need for explicit type annotations."
        },
        {
            "question": "What is an optional binding in Swift?",
            "options": [
                { "text": "A way to force unwrap optionals", "correct": false },
                { "text": "A way to assign a default value to an optional", "correct": false },
                { "text": "A way to conditionally bind the value of an optional to a constant or variable", "correct": true },
                { "text": "A way to create optional constants", "correct": false }
            ],
            "explanation": "Optional binding in Swift is a mechanism that allows you to safely check if an optional contains a value and, if it does, bind that value to a constant or variable for use within a conditional block."
        },
        {
            "question": "What is the purpose of Swift's 'guard' statement?",
            "options": [
                { "text": "To define functions", "correct": false },
                { "text": "To declare constants", "correct": false },
                { "text": "To transfer program control out of a scope if a condition is not met", "correct": true },
                { "text": "To create loops", "correct": false }
            ],
            "explanation": "The 'guard' statement in Swift is used to transfer program control out of a scope if a condition is not met. It is often used for early exit from functions when certain conditions are not satisfied."
        },
        {
            "question": "Which Swift feature is used for handling errors in a structured way?",
            "options": [
                { "text": "Exception handling", "correct": false },
                { "text": "Error handling", "correct": true },
                { "text": "Type inference", "correct": false },
                { "text": "Optionals", "correct": false }
            ],
            "explanation": "Swift provides structured error handling using the 'try', 'catch', and 'throw' keywords, allowing developers to handle and propagate errors in a controlled manner."
        },
        {
            "question": "What is a playground in the context of Swift development?",
            "options": [
                { "text": "A physical location for coding", "correct": false },
                { "text": "A type of loop in Swift", "correct": false },
                { "text": "An interactive environment for experimenting with Swift code", "correct": true },
                { "text": "A specialized Swift programming language for games", "correct": false }
            ],
            "explanation": "In Swift development, a playground is an interactive environment where you can write and test Swift code, see results immediately, and experiment with language features."
        },
        {
            "question": "Which Swift data type is used to represent a collection of values that must be of the same type?",
            "options": [
                { "text": "Array", "correct": true },
                { "text": "Dictionary", "correct": false },
                { "text": "Set", "correct": false },
                { "text": "Tuple", "correct": false }
            ],
            "explanation": "In Swift, an 'Array' is used to represent a collection of values that must be of the same data type, and the values are stored in a specific order."
        }
    ],
    "R": [
        {
            "question": "What is R?",
            "options": [
                { "text": "A type of car", "correct": false },
                { "text": "A programming language for web development", "correct": false },
                { "text": "A statistical programming language for data analysis and visualization", "correct": true },
                { "text": "A video game console", "correct": false }
            ],
            "explanation": "R is a statistical programming language used for data analysis, statistical modeling, and data visualization."
        },
        {
            "question": "Which symbol is used to assign values to variables in R?",
            "options": [
                { "text": "=", "correct": true },
                { "text": "==", "correct": false },
                { "text": "<-", "correct": false },
                { "text": ":=", "correct": false }
            ],
            "explanation": "In R, the '=' symbol is used to assign values to variables."
        },
        {
            "question": "What is the result of '3 + 5' in R?",
            "options": [
                { "text": "8.0", "correct": false },
                { "text": "8", "correct": true },
                { "text": "53", "correct": false },
                { "text": "NaN", "correct": false }
            ],
            "explanation": "In R, '3 + 5' results in the integer value '8'."
        },
        {
            "question": "Which function is used to read data from a CSV file in R?",
            "options": [
                { "text": "read.csv()", "correct": true },
                { "text": "importData()", "correct": false },
                { "text": "loadFile()", "correct": false },
                { "text": "readData()", "correct": false }
            ],
            "explanation": "The 'read.csv()' function in R is used to read data from a CSV file and create a data frame."
        },
        {
            "question": "What does the 'summary()' function do in R?",
            "options": [
                { "text": "Prints the data frame to the console", "correct": false },
                { "text": "Calculates summary statistics for numeric data", "correct": true },
                { "text": "Plots a bar chart", "correct": false },
                { "text": "Defines a custom function", "correct": false }
            ],
            "explanation": "The 'summary()' function in R is used to calculate summary statistics (e.g., mean, median, min, max) for numeric data in a data frame."
        },
        {
            "question": "What is the purpose of the 'ggplot2' package in R?",
            "options": [
                { "text": "To perform linear regression", "correct": false },
                { "text": "To write custom functions", "correct": false },
                { "text": "To create data visualizations and plots", "correct": true },
                { "text": "To load external data files", "correct": false }
            ],
            "explanation": "The 'ggplot2' package in R is used for creating a wide variety of data visualizations and plots, including scatterplots, bar charts, and more."
        },
        {
            "question": "What is the purpose of the 'ifelse()' function in R?",
            "options": [
                { "text": "To calculate the factorial of a number", "correct": false },
                { "text": "To create custom functions", "correct": false },
                { "text": "To conditionally apply a function to elements of a vector", "correct": true },
                { "text": "To print the contents of a data frame", "correct": false }
            ],
            "explanation": "The 'ifelse()' function in R is used to conditionally apply a function to elements of a vector based on a specified condition."
        },
        {
            "question": "Which package in R is commonly used for machine learning and predictive modeling?",
            "options": [
                { "text": "dplyr", "correct": false },
                { "text": "ggplot2", "correct": false },
                { "text": "caret", "correct": true },
                { "text": "reshape2", "correct": false }
            ],
            "explanation": "The 'caret' package in R is commonly used for machine learning tasks, including data preprocessing, model training, and evaluation."
        },
        {
            "question": "What is the purpose of the 'apply()' function in R?",
            "options": [
                { "text": "To print a summary of data", "correct": false },
                { "text": "To create custom functions", "correct": false },
                { "text": "To apply a function to the rows or columns of a matrix or data frame", "correct": true },
                { "text": "To load external datasets", "correct": false }
            ],
            "explanation": "The 'apply()' function in R is used to apply a specified function to the rows or columns of a matrix or data frame."
        },
        {
            "question": "What is the purpose of the 'merge()' function in R?",
            "options": [
                { "text": "To sort a data frame", "correct": false },
                { "text": "To combine two or more data frames based on a common column", "correct": true },
                { "text": "To create histograms", "correct": false },
                { "text": "To filter data", "correct": false }
            ],
            "explanation": "The 'merge()' function in R is used to combine two or more data frames into a single data frame based on a common column or key."
        }
    ]
}

export { quizQuestions };