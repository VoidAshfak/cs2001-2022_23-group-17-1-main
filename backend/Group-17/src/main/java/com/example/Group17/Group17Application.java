package com.example.Group17;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
// parenthesis bypass security auto configuration
@SpringBootApplication(exclude = {SecurityAutoConfiguration.class })
public class Group17Application {
    public static void main(String[] args) {
        SpringApplication.run(Group17Application.class, args);
    }
}
