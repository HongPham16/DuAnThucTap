import tkinter as tk
from tkinter import messagebox
import random
# Tạo bàn cờ 3x3 và trả về nó
def create_board():
    return [[' ' for _ in range(3)] for _ in range(3)]
# Kiểm tra người chiến thắng dựa trên biểu tượng (X hoặc O)
def check_winner(board, symbol):
    for i in range(3):
        if all(board[i][j] == symbol for j in range(3)) or all(board[j][i] == symbol for j in range(3)):
            return True
    if all(board[i][i] == symbol for i in range(3)) or all(board[i][2-i] == symbol for i in range(3)):
        return True
    return False
# Kiểm tra xem bàn cờ đã đầy hay chưa
def is_full(board):
    return all(board[i][j] != ' ' for i in range(3) for j in range(3))
# Lấy danh sách các nước đi hợp lệ (các ô chưa được điền)
def get_valid_moves(board):
    return [(i, j) for i in range(3) for j in range(3) if board[i][j] == ' ']
# Đánh giá nước đi dựa trên hàng, cột và đường chéo của biểu tượng
def evaluate_move(board, row, col, symbol):
    directions = [(0, 1), (1, 0), (1, 1), (1, -1)]

    score = 0
    for dr, dc in directions:
        count = 0
        for i in range(-4, 5):
            r = row + i * dr
            c = col + i * dc
            if 0 <= r < 3 and 0 <= c < 3:
                if board[r][c] == symbol:
                    count += 1
                elif board[r][c] != ' ':
                    break
            else:
                break
        if count >= 4:
            score += 1

    return score
# Tìm nước đi tối ưu để ngăn người chơi
def get_blocking_move(board):
    best_move = None
    best_score = -1

    for i in range(3):
        for j in range(3):
            if board[i][j] == ' ':
                score = evaluate_move(board, i, j, 'X')
                if score > best_score:
                    best_score = score
                    best_move = (i, j)

    return best_move
# Thuật toán Minimax
def minimax(board, depth, is_maximizing):
    if check_winner(board, 'X'):
        return -1
    elif check_winner(board, 'O'):
        return 1
    elif is_full(board):
        return 0

    if is_maximizing:
        best_score = -float('inf')
        for move in get_valid_moves(board):
            row, col = move
            board[row][col] = 'O'
            score = minimax(board, depth+1, False)
            board[row][col] = ' '
            best_score = max(score, best_score)
        return best_score
    else:
        best_score = float('inf')
        for move in get_valid_moves(board):
            row, col = move
            board[row][col] = 'X'
            score = minimax(board, depth+1, True)
            board[row][col] = ' '
            best_score = min(score, best_score)
        return best_score
# Lấy nước đi tối ưu của máy tính
def get_best_move(board):
    best_score = -float('inf')
    best_move = None
    for move in get_valid_moves(board):
        row, col = move
        board[row][col] = 'O'
        score = minimax(board, 0, False)
        board[row][col] = ' '
        if score > best_score:
            best_score = score
            best_move = move
    return best_move

def play_game():
    # Hàm thực hiện nước đi của người chơi hoặc máy tính
    def make_move(row, col):
        nonlocal current_user
        if board[row][col] == ' ':
            buttons[row][col]['text'] = current_user
            buttons[row][col]['state'] = 'disabled'
            board[row][col] = current_user
            if check_winner(board, current_user):
                messagebox.showinfo("Kết quả", f"Người chơi {current_user} thắng!")
                if messagebox.askyesno("Chơi lại", "Bạn muốn chơi lại không?"):
                    reset_game()
                else:
                    root.quit()
            elif is_full(board):
                messagebox.showinfo("Kết quả", "Trò chơi hòa!")
                if messagebox.askyesno("Chơi lại", "Bạn muốn chơi lại không?"):
                    reset_game()
                else:
                    root.quit()
            else:
                current_user = 'O' if current_user == 'X' else 'X'
                if current_user == 'O':
                    row, col = get_best_move(board)
                    make_move(row, col)
    # Đặt lại trò chơi
    def reset_game():
        nonlocal current_user
        for i in range(3):
            for j in range(3):
                buttons[i][j]['text'] = ' '
                buttons[i][j]['state'] = 'active'
                board[i][j] = ' '
        current_user = 'X'


    board = create_board()
    current_user = 'X'

    root = tk.Tk()
    root.title("Caro Game")
    root.configure(bg='lightblue')  # Đặt màu nền xanh

    buttons = [[None, None, None] for _ in range(3)]
    for i in range(3):
        for j in range(3):
            buttons[i][j] = tk.Button(root, text=' ', font=('bold', 25), width=10, height=4,
                                      command=lambda i=i, j=j: make_move(i, j), bg='lightyellow')
            buttons[i][j].grid(row=i, column=j)

    if current_user == 'O':
        row, col = random.choice(get_valid_moves(board))
        make_move(row, col)

    continue_button = tk.Button(root, text="Tiếp tục", command=reset_game)
    continue_button.grid(row=3, column=0)

    exit_button = tk.Button(root, text="Thoát", command=root.quit)
    exit_button.grid(row=3, column=1)

    root.mainloop()

if __name__ == "__main__":
    play_game()