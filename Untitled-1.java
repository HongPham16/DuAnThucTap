import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class CaroGame extends JFrame implements ActionListener {
    private JButton[][] buttons;
    private boolean player1Turn = true;

    public CaroGame(int size) {
        buttons = new JButton[size][size];
        initializeBoard(size);
        setTitle("Caro Game");
        setSize(500, 500);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setVisible(true);
    }

    private void initializeBoard(int size) {
        setLayout(new GridLayout(size, size));
        for (int i = 0; i < size; i++) {
            for (int j = 0; j < size; j++) {
                buttons[i][j] = new JButton("");
                buttons[i][j].setFont(new Font("Arial", Font.PLAIN, 40));
                buttons[i][j].setFocusPainted(false);
                buttons[i][j].addActionListener(this);
                add(buttons[i][j]);
            }
        }
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        JButton buttonClicked = (JButton) e.getSource();
        if (!buttonClicked.getText().equals("")) {
            return;
        }

        if (player1Turn) {
            buttonClicked.setText("X");
        } else {
            buttonClicked.setText("O");
        }

        if (checkWin()) {
            String winner = player1Turn ? "Player 1" : "Player 2";
            JOptionPane.showMessageDialog(this, "Congratulations! " + winner + " wins!");
            resetBoard();
        } else if (checkDraw()) {
            JOptionPane.showMessageDialog(this, "It's a draw!");
            resetBoard();
        } else {
            player1Turn = !player1Turn;
        }
    }

    private boolean checkWin() {
        // Implement your win-checking logic here
        return false;
    }

    private boolean checkDraw() {
        // Implement your draw-checking logic here
        return false;
    }

    private void resetBoard() {
        for (int i = 0; i < buttons.length; i++) {
            for (int j = 0; j < buttons[i].length; j++) {
                buttons[i][j].setText("");
            }
        }
        player1Turn = true;
    }

    public static void main(String[] args) {
        int boardSize = 3; // Kích thước bàn cờ
        new CaroGame(boardSize);
    }
}
