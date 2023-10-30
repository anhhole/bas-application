package com.anhlh.bas.broker;

import java.util.function.Supplier;
import org.springframework.stereotype.Component;

@Component
public class KafkaProducer implements Supplier<String> {

    @Override
    public String get() {
        return "kakfa_producer";
    }
}
