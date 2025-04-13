class PingPong {
	private boolean isPingTurn = true;

	public synchronized void ping() throws InterruptedException {
		while (!isPingTurn)
			wait();
		System.out.println("Ping");
		isPingTurn = false;
		notify();
	}

	public synchronized void pong() throws InterruptedException {
		while (isPingTurn)
			wait();
		System.out.println("Pong");
		isPingTurn = true;
		notify();
	}
}

public class question5 {
	public static void main(String[] args) throws InterruptedException {
		PingPong pingPong = new PingPong();
		Thread pingThread = new Thread(() -> {
			for (int i = 0; i < 5; i++)
				try {
					pingPong.ping();
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
		}, "Ping-Thread");
		Thread pongThread = new Thread(() -> {
			for (int i = 0; i < 5; i++)
				try {
					pingPong.pong();
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
		}, "Pong-Thread");
		pingThread.start();
		pongThread.start();
		pingThread.join();
		pongThread.join();
	}
}
