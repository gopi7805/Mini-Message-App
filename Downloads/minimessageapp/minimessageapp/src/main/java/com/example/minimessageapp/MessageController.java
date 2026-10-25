package com.example.minimessageapp;


import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = {
        "http://127.0.0.1:5500",
        "http://localhost:5500"
})
public class MessageController {

    @GetMapping("/message")
    public String getMessage(@RequestParam String text) {
        return "You sent: " + text;
    }

}
