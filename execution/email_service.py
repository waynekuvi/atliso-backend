"""
Email Service - SMTP email sending
"""

import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Optional


class EmailService:
    """
    Email service using SMTP (Gmail)
    """
    
    def __init__(self):
        self.host = os.getenv("SMTP_HOST", "smtp.gmail.com")
        self.port = int(os.getenv("SMTP_PORT", 587))
        self.user = os.getenv("SMTP_USER")
        self.password = os.getenv("SMTP_PASSWORD")
    
    async def send(
        self,
        to: str,
        subject: str,
        body: str,
        html: Optional[str] = None,
        from_name: str = "Atliso Team"
    ) -> bool:
        """
        Send an email
        
        Args:
            to: Recipient email address
            subject: Email subject
            body: Plain text body
            html: Optional HTML body
            from_name: Sender display name
        
        Returns:
            True if sent successfully
        """
        if not to:
            print("[EmailService] No recipient specified")
            return False
        
        if not self.user or not self.password:
            print("[EmailService] SMTP credentials not configured")
            return False
        
        try:
            # Create message
            msg = MIMEMultipart("alternative")
            msg["Subject"] = subject
            msg["From"] = f"{from_name} <{self.user}>"
            msg["To"] = to
            
            # Attach plain text
            msg.attach(MIMEText(body, "plain"))
            
            # Attach HTML if provided
            if html:
                msg.attach(MIMEText(html, "html"))
            
            # Connect and send
            with smtplib.SMTP(self.host, self.port) as server:
                server.starttls()
                server.login(self.user, self.password)
                server.send_message(msg)
            
            print(f"[EmailService] Email sent to {to}")
            return True
            
        except Exception as e:
            print(f"[EmailService] Error sending email: {e}")
            return False
    
    async def send_html(
        self,
        to: str,
        subject: str,
        html: str,
        from_name: str = "Atliso Team"
    ) -> bool:
        """
        Send an HTML email (plain text auto-generated)
        """
        # Generate plain text from HTML (simple strip)
        import re
        plain = re.sub(r"<[^>]+>", "", html)
        plain = re.sub(r"\s+", " ", plain).strip()
        
        return await self.send(
            to=to,
            subject=subject,
            body=plain,
            html=html,
            from_name=from_name
        )
