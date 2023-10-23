#include <iostream>
#include <string>
#include <stack>
#include <sstream>

using namespace std;

// Hàm kiểm tra một ký tự có phải là toán tử hay không
bool isOperator(char c) {
    return (c == '+' || c == '-' || c == '*' || c == '/');
}

// Hàm kiểm tra một ký tự có phải là dấu ngoặc hay không
bool isParenthesis(char c) {
    return (c == '(' || c == ')');
}

// Hàm lấy độ ưu tiên của toán tử
int getPrecedence(char op) {
    if (op == '+' || op == '-')
        return 1;
    else if (op == '*' || op == '/')
        return 2;
    else
        return 0;
}

// Hàm chuyển biểu thức trung tố sang hậu tố
string infixToPostfix(string infix) {
    stringstream ss(infix);
    string token;
    stack<char> operators;
    string postfix;

    while (getline(ss, token, ' ')) {
        if (token.empty()) {
            continue;
        }

        if (isdigit(token[0])) {
            // Nếu là toán hạng, thêm vào biểu thức hậu tố
            postfix += token;
            postfix += ' ';
        } else if (isOperator(token[0])) {
            // Nếu là toán tử, xử lý độ ưu tiên và đưa vào stack operators
            while (!operators.empty() && !isParenthesis(operators.top()) &&
                   getPrecedence(operators.top()) >= getPrecedence(token[0])) {
                postfix += operators.top();
                postfix += ' ';
                operators.pop();
            }
            operators.push(token[0]);
        } else if (token[0] == '(') {
            // Nếu là dấu ngoặc mở, đưa vào stack operators
            operators.push(token[0]);
        } else if (token[0] == ')') {
            // Nếu là dấu ngoặc đóng, lấy các toán tử từ stack và thêm vào biểu thức hậu tố
            while (!operators.empty() && !isParenthesis(operators.top())) {
                postfix += operators.top();
                postfix += ' ';
                operators.pop();
            }
            if (!operators.empty() && operators.top() == '(') {
                operators.pop();
            }
        }
    }

    // Lấy các toán tử còn lại từ stack và thêm vào biểu thức hậu tố
    while (!operators.empty()) {
        postfix += operators.top();
        postfix += ' ';
        operators.pop();
    }

    return postfix;
}

// Hàm tính toán kết quả của biểu thức hậu tố
int evaluatePostfix(string postfix) {
    stringstream ss(postfix);
    string token;
    stack<int> operands;

    while (getline(ss, token, ' ')) {
        if (token.empty()) {
            continue;
        }

        if (isdigit(token[0])) {
            // Nếu là toán hạng, chuyển đổi từ chuỗi sang số nguyên và đẩy vào stack operands
            int operand = stoi(token);
            operands.push(operand);
        } else if (isOperator(token[0])) {
            // Nếu là toán tử, lấy hai toán hạng từ stack operands, thực hiện phép tính và đẩy kết quả vào stack operands
            int operand2 = operands.top();
            operands.pop();

            int operand1 = operands.top();
            operands.pop();

            int result;

            // Thực hiện phép tính tương ứng với toán tử
            switch (token[0]) {
                case '+':
                    result = operand1 + operand2;
                    break;
                case '-':
                    result = operand1 - operand2;
                    break;
                case '*':
                    result = operand1 * operand2;
                    break;
                case '/':
                    result = operand1 / operand2;
                    break;
            }

            operands.push(result);
        }
    }

    // Kết quả cuối cùng sẽ nằm trong stack operands
    return operands.top();
}

int main() {
    string infixExpression;
    cout << "Nhap phep toan: ";
    getline(cin, infixExpression);

    string postfixExpression = infixToPostfix(infixExpression);
    // cout << "Biểu thức hậu tố: " << postfixExpression << endl;

    int result = evaluatePostfix(postfixExpression);
    cout << "Ket qua: " << result << endl;

    return 0;
}
