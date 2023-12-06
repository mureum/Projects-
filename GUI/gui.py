import tkinter as tk
from tkinter import messagebox

# Create main window
root = tk.Tk()
root.title("Login System")

# Create username button
label_username = tk.Label(root, text="Username:")
label_username.grid(row=0, column=0, padx=10, pady=10, sticky=tk.W)

entry_username = tk.Entry(root)
entry_username.grid(row=0, column=1, padx=10, pady=10)

# Create Password button
label_password = tk.Label(root, text="Password:")
label_password.grid(row=1, column=0, padx=10, pady=10, sticky=tk.W)

entry_password = tk.Entry(root, show="*")
entry_password.grid(row=1, column=1, padx=10, pady=10)


# Start the main event loop
root.mainloop()
