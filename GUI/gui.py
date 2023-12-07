import tkinter as tk
from tkinter import messagebox

def validate_login():
    username = entry_username.get()
    password = entry_password.get()

    # Add your authentication logic here
    # For simplicity, let's use a hardcoded username and password
    if username == "user" and password == "password":
        open_main_window()
    else:
        messagebox.showerror("Login Failed", "Invalid username or password")

def open_main_window():
    # Create a new window for the main application
    main_window = tk.Toplevel(root)
    main_window.title("Main Application")

    # Welcome label
    label_welcome = tk.Label(main_window, text="Welcome to the Main Application, {}".format(entry_username.get()))
    label_welcome.pack(padx=10, pady=10)

    # Salary input
    label_salary = tk.Label(main_window, text="Enter Monthly Salary:")
    label_salary.pack(pady=5)

    entry_salary = tk.Entry(main_window)
    entry_salary.pack(padx=10, pady=10)

    # Budget Manager
    label_budget = tk.Label(main_window, text="Budget Manager")
    label_budget.pack(pady=5)

    # Text widget for displaying budget information
    budget_text = tk.Text(main_window, height=10, width=40)
    budget_text.pack(padx=10, pady=10)

    # Button to calculate 60/40 split
    calculate_button = tk.Button(main_window, text="Calculate Split", command=lambda: calculate_split(entry_salary.get(), budget_text))
    calculate_button.pack(pady=10)

def calculate_split(salary, text_widget):
    try:
        salary = float(salary)
        leisure_budget = salary * 0.4
        expenses_budget = salary * 0.6

        # Update the text widget with the split information
        split_data = "Monthly Salary: £{:.2f}\n\n".format(salary)
        split_data += "Expenses Budget (60%): £{:.2f}\n".format(expenses_budget)
        split_data += "Savings Budget (40%): £{:.2f}".format(leisure_budget)

        text_widget.config(state=tk.NORMAL)  # Make the text widget editable
        text_widget.delete(1.0, tk.END)  # Clear previous content
        text_widget.insert(tk.END, split_data)
        text_widget.config(state=tk.DISABLED)  # Make the text widget read-only

    except ValueError:
        messagebox.showerror("Invalid Input", "Please enter a valid salary.")

# Create main window
root = tk.Tk()
root.title("Login System")

# Create and place widgets
label_username = tk.Label(root, text="Username:")
label_username.grid(row=0, column=0, padx=10, pady=10, sticky=tk.W)

entry_username = tk.Entry(root)
entry_username.grid(row=0, column=1, padx=10, pady=10)

label_password = tk.Label(root, text="Password:")
label_password.grid(row=1, column=0, padx=10, pady=10, sticky=tk.W)

entry_password = tk.Entry(root, show="*")
entry_password.grid(row=1, column=1, padx=10, pady=10)

login_button = tk.Button(root, text="Login", command=validate_login)
login_button.grid(row=2, column=0, columnspan=2, pady=10)

# Start the main event loop
root.mainloop()
